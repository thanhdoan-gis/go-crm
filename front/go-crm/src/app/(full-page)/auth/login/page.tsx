/* eslint-disable @next/next/no-img-element */
'use client';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { LayoutContext } from '../../../../layout/context/layoutcontext';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { login } from '@/service/user';
import { currentUserState } from '@/store/global';
import { useRecoilState } from 'recoil';
import { useCookies } from 'react-cookie';
import { usePathname, useSearchParams } from 'next/navigation'

const LoginPage = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [checked, setChecked] = useState(false);
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const { layoutConfig } = useContext(LayoutContext);
  const [cookies, setCookie] = useCookies(["token"]);
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter();

  const containerClassName = classNames('surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden', { 'p-input-filled': layoutConfig.inputStyle === 'filled' });
  const onLogin = async () => {
    const user = await login(email, password)
    if (user) {
      setCurrentUser(user)
      setCookie('token', JSON.stringify(user))
      const fromUrl = searchParams.get('from')
      router.push(fromUrl || '/')
    }
  }
  return (
    <div className={containerClassName}>
      <div className="flex flex-column align-items-center justify-content-center">
        <div
          style={{
            borderRadius: '56px',
            padding: '0.3rem',
            background: 'linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)'
          }}
        >
          <div className="w-full surface-card py-8 px-5 sm:px-8" style={{ borderRadius: '53px' }}>
            <div className="text-center mb-5">
              Go CRM
              <div className="text-900 text-3xl font-medium mb-3">Welcome!</div>
              <span className="text-600 font-medium">Sign in to continue</span>
            </div>

            <div>
              <label htmlFor="email1" className="block text-900 text-xl font-medium mb-2">
                Email
              </label>
              <InputText
                id="email1" type="text" placeholder="Email address" className="w-full md:w-30rem mb-5" style={{ padding: '1rem' }} value={email} onChange={(e) => setEmail(e.target.value)} />
              <label htmlFor="password1" className="block text-900 font-medium text-xl mb-2">
                Password
              </label>
              <Password inputId="password1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                toggleMask
                className="w-full mb-5"
                feedback={false}
                inputClassName="w-full p-3 md:w-30rem"
              />
              <div className="flex align-items-center justify-content-between mb-5 gap-5">
                <div className="flex align-items-center">
                  <Checkbox inputId="rememberme1" checked={checked} onChange={(e) => setChecked(e.checked ?? false)} className="mr-2"></Checkbox>
                  <label htmlFor="rememberme1">Remember me</label>
                </div>
                <a className="font-medium no-underline ml-2 text-right cursor-pointer" style={{ color: 'var(--primary-color)' }}>
                  Forgot password?
                </a>
              </div>
              <Button label="Sign In" className="w-full p-3 text-xl" onClick={() => onLogin()}></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
