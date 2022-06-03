import { useState} from 'react'
import { Animated} from 'react-native';
import { BodyProps } from './types';
import{ Container} from './styles';


export const Body = ({children}:BodyProps)=>{
    const [fadeIn] = useState(new Animated.Value(0));
    Animated.timing(
        fadeIn,
        {
          toValue:1,
          duration:1000,
          useNativeDriver:false,
          delay:1800,
        }
      ).start();
    
    return(
        <Animated.View style={[{opacity:fadeIn}]}>
            <Container>
                {children}
          </Container>
        </Animated.View>
    )
}

export default Body