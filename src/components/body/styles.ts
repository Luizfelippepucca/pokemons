import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;


export const Container = styled.View`
width:${windowWidth};
padding:39px 22px ;
flex:1 ;
`