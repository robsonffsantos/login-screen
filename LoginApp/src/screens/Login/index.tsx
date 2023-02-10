import React, { useState } from 'react'
import * as S from '../styles'
import { Alert, TouchableOpacity } from 'react-native'
import { useAuth } from '../../context/MyProvider'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
    const [tries, setTries] = useState(0)
    const { email, password, typedEmail, setTypedEmail, typedPassword, setTypedPassword } = useAuth()
    const navigation = useNavigation()

    const handleLogin = () => {
        if (email === typedEmail && password === typedPassword) {
          setTries(0);
          Alert.alert('Sucesso', 'Login realizado com sucesso');
          navigation.navigate('Home')
        } else {
          setTries(tries + 1);
          if (tries >= 3) {
            Alert.alert('Erro', 'Tentativas de login excedidas. Tente novamente mais tarde.');
          } else {
            Alert.alert('Erro', 'E-mail ou senha incorretos');
          }
        }
      }

    return (
        <S.GradientContainer
        colors={['#7b1fa2', '#c2185b']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        >
            <S.MainContainer>
                <S.MainTitle>epistemic</S.MainTitle>
                <S.SubContainer>
                    <S.AppInput
                        placeholder="E-mail"
                        onChangeText={(text: string) => setTypedEmail(text)}
                        value={typedEmail}
                    />
                    <S.AppInput
                        placeholder="Senha"
                        onChangeText={(text: string) => setTypedPassword(text)}
                        value={typedPassword}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity onPress={handleLogin} style={{ alignItems: 'center' }}>
                        <S.EnterButton>
                            <S.EnterTitle>Entrar</S.EnterTitle>
                        </S.EnterButton>
                    </TouchableOpacity>
                </S.SubContainer>
                <S.LinksContainer>
                    <TouchableOpacity onPress={ () =>navigation.navigate('Forgot Password')}>
                        <S.EnterLinks>
                            Esqueci minha senha
                        </S.EnterLinks>
                    </TouchableOpacity>        
                    <TouchableOpacity onPress={ () =>navigation.navigate('Register')}>
                        <S.EnterLinks>
                            Não tem conta? Registre-se
                        </S.EnterLinks>
                    </TouchableOpacity>  
                </S.LinksContainer>                   
            </S.MainContainer>
            <TouchableOpacity onPress={ () =>navigation.navigate('Terms')}>
                <S.TermsLink>
                    Termos de Uso
                </S.TermsLink>
            </TouchableOpacity>  
        </S.GradientContainer>
    )
}

export default LoginScreen