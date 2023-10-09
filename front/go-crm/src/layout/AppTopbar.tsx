/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { classNames } from 'primereact/utils';
import React, { forwardRef, useContext, useImperativeHandle, useRef } from 'react';
import { AppTopbarRef } from '../types/types';
import { LayoutContext } from './context/layoutcontext';
import { Menu } from 'primereact/menu';
import { MenuItem } from 'primereact/menuitem';
import { Toast } from 'primereact/toast';
import { useRouter } from 'next/navigation';

const AppTopbar = forwardRef<AppTopbarRef>((props, ref) => {
  const { layoutConfig, layoutState, onMenuToggle, showProfileSidebar } = useContext(LayoutContext);
  const menubuttonRef = useRef(null);
  const topbarmenuRef = useRef(null);
  const topbarmenubuttonRef = useRef(null);
  const topbarOptionsMenuButtonRef = useRef(null);
  const router = useRouter()
  const toast = useRef<Toast>(null);
  const topbarOptionsMenuItems: MenuItem[] = [
    {
        label: 'Options',
        items: [
            {
                label: 'Log out',
                icon: 'pi pi-sign-out',
                command: () => {
                    toast.current.show({ severity: 'success', summary: 'Logged out', detail: 'Logging out to application', life: 3000 });
                    router.push('/auth/login')
                }
            }
        ]
    }]
  useImperativeHandle(ref, () => ({
    menubutton: menubuttonRef.current,
    topbarmenu: topbarmenuRef.current,
    topbarmenubutton: topbarmenubuttonRef.current
  }));

  return (
    <div className="layout-topbar">
      <Link href="/" className="layout-topbar-logo">
        <span>GO-CRM</span>
      </Link>

      <button ref={menubuttonRef} type="button" className="p-link layout-menu-button layout-topbar-button" onClick={onMenuToggle}>
        <i className="pi pi-bars" />
      </button>

      <button ref={topbarmenubuttonRef} type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={showProfileSidebar}>
        <i className="pi pi-ellipsis-v" />
      </button>

      <div ref={topbarmenuRef} className={classNames('layout-topbar-menu', { 'layout-topbar-menu-mobile-active': layoutState.profileSidebarVisible })}>
        <button type="button" className="p-link layout-topbar-button">
          <i className="pi pi-calendar"></i>
          <span>Calendar</span>
        </button>
        <button type="button" className="p-link layout-topbar-button">
          <i className="pi pi-user"></i>
          <span>Profile</span>
        </button>
        <Menu model={topbarOptionsMenuItems} popup ref={topbarOptionsMenuButtonRef} id="topbarOptionsMenuButton" />
        <button type="button" className="p-link layout-topbar-button" onClick={(event) => topbarOptionsMenuButtonRef.current.toggle(event)}>
          <i className="pi pi-cog"></i>
          <span>Settings</span>
        </button>

      </div>
      <Toast ref={toast}></Toast>
    </div>
  );
});

AppTopbar.displayName = 'AppTopbar';

export default AppTopbar;
