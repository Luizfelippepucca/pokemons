import { css } from 'styled-components';
import styled from 'styled-components/native';
import { StyleSheet} from 'react-native';



export const Container = styled.View`
flex:1;
height:20%;
display:flex ;
flex-direction:row ;
border-bottom-left-radius:24px ;
border-bottom-right-radius:24px ;
${({theme})=>css`
background-color:${theme.colors.header.background.primary};
`
}
`
export const ContLeftHeader = styled.View`
flex:1 ;
display:flex ;
align-items:flex-start ;
justify-content:flex-end;
padding-bottom:35px ;
padding-left:22px ;
`

export const ContRightHeader = styled.View`
flex:1 ;
display:flex ;
align-items:center ;
justify-content:flex-end ;
position:relative ;
`

export const CustomCircle = styled.View`
width:100%;
height:auto ;
display:flex ;
align-items: flex-end;
`

export const CustomSmallCircle = styled.View`
width:10px;
height:10px ;
border-bottom-left-radius:5px;
border-bottom-right-radius:5px;
border-top-right-radius:5px;
border-top-left-radius:5px;
position:absolute ;
top:33% ;
right:17% ;
${({theme})=>css`
background-color:${theme.colors.header.smallCicle.primary}`};
`

export const CircleImg = styled.Image`
width:147px;
height:147px ;
`

export const ProfilePicture = styled.Image`
width:47px;
height:47px ;
position:absolute ;
top:38%;
right:20% ;

`

export const styles = StyleSheet.create({
  
    TitleText:{
        fontFamily:'Inter_400Regular',
        fontSize:20,
        color:'#fff',
    },
    SubtitleText:{
       fontFamily:'Inter_400Regular',
       fontSize:14,
       color:'#fff',
    }
  
 
 })