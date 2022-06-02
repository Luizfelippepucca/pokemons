import {  useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Animated} from 'react-native';
import {Container,Logo} from './styles'

export const App = () =>{
  const [load,setLoad] = useState(new Animated.Value(200));
  const [fadeIn,setFadeIn] = useState(new Animated.Value(0));

  Animated.timing(
    load,
    {
    toValue: 550,
    duration: 1000,
    useNativeDriver: false,
    }
  ).start();

  Animated.timing(
    fadeIn,
    {
      toValue:1,
      duration:1000,
      useNativeDriver:false,
      delay:1000,
    }
  ).start();


  return (
    <Container >
      <Animated.View style={[styles.box,{
        transform:[{translateY:load }]
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
      <StatusBar style="auto" />
    </Container>
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
