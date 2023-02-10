import React from 'react'
import * as S from '../styles'
import { useNavigation } from '@react-navigation/native'
import perfil from '../../assets/approved-profile-icon.png'
import { TouchableOpacity } from 'react-native'

const HomeScreen = () => {
    const navigation = useNavigation()

    return (
        <S.GradientContainer
            colors={['#7b1fa2', '#c2185b']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}>
                <S.HomeContainer>
                    <S.HomeText>
                        Olá, visitante!
                    </S.HomeText>
                    <S.HomeImage source={perfil} />
                    <S.HomeText>
                        Obrigado por fazer login no aplicativo.
                    </S.HomeText>
                </S.HomeContainer>
        </S.GradientContainer>
    )
}

export default HomeScreen