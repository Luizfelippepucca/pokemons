import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { css } from 'styled-components/native';

const windowWidth = Dimensions.get('window').width;

export const Container = styled.View`
width:${windowWidth};
padding:39px 22px ;
flex:1 ;
`

export const Title = styled.Text`
font-size: 24px;
letter-spacing:0.1 ;
${({theme})=>css`
  color:${theme.colors.body.title.primary} ;
`}
`
