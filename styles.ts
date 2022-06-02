import { css } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
 flex: 1;
 align-items:center ;
 justify-content:flex-start ;
 ${({theme})=>css`
 background-color: ${theme.colors.background.primary} ;
 `}
`

export const Logo = styled.Image`
width:300px;
height:105px ;

`