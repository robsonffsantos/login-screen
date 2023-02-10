import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient';

export const GradientContainer = styled(LinearGradient)`
  height: 100%;
  align-items: center;
  justify-content: space-evenly;

`

export const MainContainer = styled.View`
    background-color: #fff;
    height: 72%;
    width: 60%;
    border-radius: 36px;
    align-items: center;
    flex-direction: column;
`

export const MainTitle = styled.Text`
    font-size: 28px;
    color: #7b1fa2;
    margin-top: 10px;
`

export const SubContainer = styled.View`
    justify-content: space-between;
    margin-top: 40px;
`

export const AppInput = styled.TextInput`
    height: 40px;
    width: 200px;
    border-color: #000000;
    border-width: 1px;
    border-radius: 12px;
`

export const EnterButton = styled.View`
    width: 90%;
    height: 42%;
    background-color: #7b1fa2;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
`

export const EnterTitle = styled.Text`
    color: #fff;
`

export const LinksContainer = styled.View`
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    height: 20%;
    margin: 0;
    padding: 0;
`

export const EnterLinks = styled.Text`
    color: #7b1fa2;
`

export const TermsLink = styled.Text`
    color: #fff;
`