import type { User } from "../model/user"
import { create } from 'zustand'

type UserStore = {
    users:User[] 
    addUser:(user:User) => void
}

export const UserState = create<UserStore>((set)=>({
    users:[],
    addUser(user) {
    // Get old value and mix it with newer
      set( (state)=>({ users : [...state.users , user] }))

      // directly set the value 
     // set({ user})
    },
}))