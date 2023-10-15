import { Agent, User } from '@/model';
import { atom, selector } from 'recoil';


export const currentUserState = atom<User | null>({
  key: 'currentUserState',
  default: null,
  effects: [
  ]
});

export const isAdminState = selector<boolean>({
  key: 'isAdminState',
  get: ({ get }) => {
    const user = get(currentUserState)
    return user ? user.isAdmin : false
  }
})

export const agentsState = atom<Agent[]>({
  key: 'agentsState',
  default: [],
  effects: []
});

export const selectedAgentState = atom<Agent | null>({
  key: 'selectedAgentState',
  default: null,
  effects: []
});


