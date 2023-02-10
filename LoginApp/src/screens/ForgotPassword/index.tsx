import React from 'react'
import { Alert, TouchableOpacity } from 'react-native'
import * as S from '../styles'
import { useAuth } from '../../context/MyProvider'
import { useNavigation } from '@react-navigation/native'

const ForgotPasswordScreen = () => {
    const { email, typedEmail, setTypedEmail, setPassword } = useAuth()
    const navigation = useNavigation()

    const ResetPassword = () => {
        if (email) {
            setPassword('123456')
            Alert.alert('Sua senha foi resetada', 'use a senha padrão 123456 para entrar na sua conta')
            navigation.navigate('Login')
        } else if (typedEmail === '') {
            Alert.alert('Erro', 'Digite um e-mail para continuar')
        } else if(email !== typedEmail) {
            Alert.alert('Erro', 'E-mail não cadastrado')
        } else {
            setPassword('123456')
            Alert.alert('Sua senha foi resetada', 'use a senha padrão 123456 para entrar na sua conta')
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
                                placeholder={email || 'e-mail'}
                                onChangeText={(text: string) => setTypedEmail(text)}
                                value={email}
                            />
                            <TouchableOpacity onPress={ResetPassword} style={{ alignItems: 'center' }}>
                                <S.EnterButton>
                                    <S.EnterTitle>Recuperar senha</S.EnterTitle>
                                </S.EnterButton>
                            </TouchableOpacity>
                        </S.SubContainer>
                </S.MainContainer>

        </S.GradientContainer>
    )
}

export default ForgotPasswordScreen