import { css } from "styled-components";
import styled from "styled-components/native";
import { StyleSheet} from 'react-native';

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

export const styles = StyleSheet.create({
    box:{
       width:'100%' ,
       display: 'flex',
       alignItems:'center',
       position:'absolute' ,
       top:100,
       zIndex: 999,
      
    },
    text:{
      color:'#fff',
    }
   
  
  })