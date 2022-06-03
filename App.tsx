import { useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { Animated,Text} from 'react-native';
import {Container,Logo,styles} from './styles';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';
import Header from './src/components/header';
import Body from './src/components/body';

export const App = () =>{
  const [slideTopImg] = useState(new Animated.Value(200));
  

  Animated.timing(
    slideTopImg,
    {
    toValue: 550,
    duration: 500,
    useNativeDriver: false,
    delay:1000,
    }
  ).start();

  return (
    <ThemeProvider theme={theme}>
       <StatusBar style="auto" />
        <Container>
          <Header/>
          <Animated.View style={[styles.box,{
            transform:[{translateY:slideTopImg }]
          }]}>
            <Logo source={require('./assets/logo.png')} />
          </Animated.View>
        <Body>
          <>
                <Text>Todo meu app </Text>
                <Text>Todo meu app </Text>
                <Text>Todo meu app </Text>
                <Text>Todo meu app </Text>
                <Text>Todo meu app </Text>
            </>
          </Body>
        </Container>
    </ThemeProvider>
  );
}





export default App;
