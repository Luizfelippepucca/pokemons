import { useState} from 'react'
import { Animated} from 'react-native';
import { BodyProps } from './types';
import{ Container,Title} from './styles';
import { Inter_600SemiBold, useFonts} from '@expo-google-fonts/inter';
import Apploading from 'expo-app-loading';



export const Body = ({children,title}:BodyProps)=>{
    const [fadeIn] = useState(new Animated.Value(0));
    const [fontsLoaded] = useFonts({
        Inter_600SemiBold
     });

    Animated.timing(
        fadeIn,
        {
          toValue:1,
          duration:500,
          useNativeDriver:false,
          delay:1200,
        }
      ).start();

      if(!fontsLoaded){
        return <Apploading/>
    }
    
    return(
        <Animated.View style={[{opacity:fadeIn}]}>
            <Container >
                {title && <Title style={{fontFamily:'Inter_600SemiBold'}}>{title}</Title>}
                {children}
          </Container>
        </Animated.View>
    )
}

export default Body