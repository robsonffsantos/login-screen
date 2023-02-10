import React from 'react'
import 'react-native-gesture-handler'
import Router from './src/routes/Router'
import { MyProvider } from './src/context/MyProvider'

const App = () => {
  return (      
      <MyProvider>
        <Router />
      </MyProvider>
  )
}

export default App