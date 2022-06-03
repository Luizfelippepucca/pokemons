import { useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { Animated} from 'react-native';
import {Container,Logo,styles} from './styles';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';
import Header from './src/components/header';
import Body from './src/components/body';
import Cards from './src/components/Cards';

export const App = () =>{
  const [slideTopImg] = useState(new Animated.Value(100));
  

  Animated.timing(
    slideTopImg,
    {
    toValue: 620,
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
        <Body 
          title="Qual pokémon você
          escolheria?"
        >
          <Cards/>
          </Body>
        </Container>
    </ThemeProvider>
  );
}





export default App;
