import { useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Animated} from 'react-native';
import {Container,Logo} from './styles';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';
import Header from './src/components/header';

export const App = () =>{
  const [slideTopImg,setSlidTopImg] = useState(new Animated.Value(200));
  const [fadeIn,setFadeIn] = useState(new Animated.Value(0));

  Animated.timing(
    slideTopImg,
    {
    toValue: 550,
    duration: 500,
    useNativeDriver: false,
    delay:1000,
    }
  ).start();

  Animated.timing(
    fadeIn,
    {
      toValue:1,
      duration:1000,
      useNativeDriver:false,
      delay:1800,
    }
  ).start();


  return (
    <ThemeProvider theme={theme}>
       <StatusBar style="auto" />
    <Container >
      <Header/>
      <Animated.View style={[styles.box,{
        transform:[{translateY:slideTopImg }]
      }]}>
        <Logo source={require('./assets/logo.png')} />
      </Animated.View>
      <Animated.View style={[{opacity:fadeIn}]}>
       <Text>Todo meu app </Text>
       <Text>Todo meu app </Text>
       <Text>Todo meu app </Text>
       <Text>Todo meu app </Text>
       <Text>Todo meu app </Text>
       <Text>Todo meu app </Text>
      </Animated.View>
     
    </Container>
    </ThemeProvider>
  );
}


const styles = StyleSheet.create({
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


export default App;
