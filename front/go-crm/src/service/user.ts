import usersPromise from '@/service/mock-data/user'
import { IRequestFilter, IResponse } from './model'
import { currentUserState } from '@/store/global'
import { useRecoilState } from 'recoil'

export const getUsers = async (filter?: IRequestFilter) => {
  const users = await usersPromise
  return users
}
export const getUser = async (id: string) => {
  const users = await usersPromise
  return users.find(u => u.id === id)
}
export const login = async (email: string, password: string) => {
  const users = await usersPromise
  const user = users.find(u => u.email === email && u.password === password)
  if (user) {
    //user as token
    return user
  }
}

