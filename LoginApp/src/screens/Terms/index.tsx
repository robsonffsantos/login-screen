import React from 'react'
import * as S from '../styles'
import { useNavigation } from '@react-navigation/native'

const TermsScreen = () => {
    const navigation = useNavigation()

    return (
        <S.GradientContainer
            colors={['#7b1fa2', '#c2185b']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}>
                <S.MainContainer>
                    <S.MainTitle>epistemic</S.MainTitle>
                    <S.NormalText>
                        1 - Para usar o aplicativo, primeiramente faça o seu registro pelo atalho da área inicial.
                    </S.NormalText>
                    <S.NormalText>
                        2 - Após fazer o registro com sucesso, utilize o mesmo e-mail e senha cadastrado para acessar seu perfil.
                    </S.NormalText>
                    <S.NormalText>
                        3 - Em caso de senha esquecida, acesse o atalho na área inicial para resetar sua senha para a senha padrão. Basta inserir o e-mail do cadastro.
                    </S.NormalText>
                    <S.NormalText>
                        Atenção: O login não é fixo, sendo necessário fazer o cadastro a cada vez que abrir o aplicativo.
                    </S.NormalText>
                </S.MainContainer>
        </S.GradientContainer>
    )
}

export default TermsScreen