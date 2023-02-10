import React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from "../screens/Login"
import RegisterScreen from "../screens/Register"
import ForgotPasswordScreen from "../screens/ForgotPassword"
import TermsScreen from "../screens/Terms"

const AuthStack = () => {
    const Stack = createStackNavigator()
    
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Register' component={RegisterScreen} />
            <Stack.Screen name='Forgot Password' component={ForgotPasswordScreen} />
            <Stack.Screen name='Terms' component={TermsScreen} />
        </Stack.Navigator>
    )
}

export default AuthStack