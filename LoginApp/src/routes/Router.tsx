import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import AppStack from "./AppStack"
import AuthStack from "./AuthStack"
import { useAuth } from '../context/MyProvider'

const Router = () => {

    console.log(auth)
    const { auth } = useAuth()
    return (
        <NavigationContainer>
            {auth ? <AppStack /> : <AuthStack />}            
        </NavigationContainer>
    )
}

export default Router