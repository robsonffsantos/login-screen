import React from 'react'
import { Alert, TouchableOpacity } from 'react-native'
import * as S from '../styles'
import { useAuth } from '../../context/MyProvider'
import { useNavigation } from '@react-navigation/native'

const RegisterScreen = () => {
    const { setEmail, setPassword, email, password } = useAuth()
    const navigation = useNavigation()

    const Register = () => {
        if (password === '' || email === '') {
            Alert.alert('Erro', 'E-mail ou senha está faltando ser preenchido')
        } else {
            Alert.alert('Sucesso', 'Use seu e-mail e senha para entrar na sua conta')
            navigation.navigate('Login')
        }        
    }

    return (
        <S.GradientContainer
            colors={['#7b1fa2', '#c2185b']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}>
                <S.MainContainer>
                    <S.MainTitle>epistemic</S.MainTitle>
                        <S.SubContainer>
                            <S.AppInput
                                placeholder="E-mail"
                                onChangeText={(text: string) => setEmail(text)}
                                value={email}
                            />
                            <S.AppInput
                                placeholder="Senha"
                                onChangeText={(text: string) => setPassword(text)}
                                value={password}
                                secureTextEntry={true}
                            />
                            <TouchableOpacity onPress={Register} style={{ alignItems: 'center' }}>
                                <S.EnterButton>
                                    <S.EnterTitle>Registrar</S.EnterTitle>
                                </S.EnterButton>
                            </TouchableOpacity>
                        </S.SubContainer>
                </S.MainContainer>

        </S.GradientContainer>
    )
}

export default RegisterScreen