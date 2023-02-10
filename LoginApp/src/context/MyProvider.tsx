import React, { createContext, useState } from 'react';
import { UserContextProps, UserContextType } from '../types/types';

export const MyContext = createContext(({} as UserContextType)
);

const MyProvider = ({ children }: UserContextProps) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const variables = { email, setEmail, password, setPassword }

  return (
    <MyContext.Provider value={{ variables }}>
      {children}
    </MyContext.Provider>
  )
}

export default MyProvider