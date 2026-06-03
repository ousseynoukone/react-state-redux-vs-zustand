import type { User } from "../model/user"
import { create } from 'zustand'

type UserStore = {
    users:User[] 
    addUser:(user:User) => void
}

export const UserState = create<UserStore>((set)=>({
    users:[],
    addUser(user) {
      set( (state)=>({ users : [...state.users , user] }))

    },
}))
