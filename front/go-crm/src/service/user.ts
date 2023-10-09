import users from '@/service/mock-data/user'
import { IRequestFilter, IResponse } from './model'
import { currentUserState } from '@/store/global'
import { useRecoilState } from 'recoil'

export const getUsers = (filter?: IRequestFilter) => {
  return users
}
export const getUser = (id: string) => {
  return users.find(u => u.id === id)
}
export const login = (email: string, password: string) => {
  const user = users.find(u => u.email === email && u.password === password)
  if (user) {
    //user as token
    return user
  }
}

