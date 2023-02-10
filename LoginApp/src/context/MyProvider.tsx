import React, { useContext, useState } from 'react';

type Context = {
  email: string;
  password: string;
  typedEmail: string;
  typedPassword: string;
  auth: boolean;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setTypedEmail: (typedEmail: string) => void;
  setTypedPassword: (typedPassword: string) => void;
  setAuth: (boolean: boolean) => void;
}

export const MyContext = React.createContext(({} as Context))

export function MyProvider ({ children }: any) {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('') 
  const [typedEmail, setTypedEmail] = useState<string>('')
  const [typedPassword, setTypedPassword] = useState<string>('')
  const [auth, setAuth] = useState<boolean>(false)

  return (
    <MyContext.Provider value={{ email, setEmail, password, setPassword, typedEmail, setTypedEmail, typedPassword, setTypedPassword, setAuth, auth }}>
      {children}
    </MyContext.Provider>
  )
}

export function useAuth () {
  const context = useContext(MyContext)

  if (context === undefined) {
    throw new Error ('erro no contexto')
  } 
  return context
}