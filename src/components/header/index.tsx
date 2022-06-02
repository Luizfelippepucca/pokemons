import { useState} from 'react'
import { Text, StyleSheet, Animated} from 'react-native';
import { Inter_400Regular, useFonts} from '@expo-google-fonts/inter';
import Apploading from 'expo-app-loading';
import {
    Container,
    ContLeftHeader,
    ContRightHeader,
    CustomCircle,
    CircleImg ,
    ProfilePicture,
    CustomSmallCircle
} from './styles';

 const Header = ()=>{
     const [slideTop,setSlideTop] = useState( new Animated.Value(0));
     const [opacity,setOpacity] = useState( new Animated.Value(0));
     const [fontsLoaded] = useFonts({
        Inter_400Regular
     });

     Animated.timing(
        slideTop,
        {
        toValue: 154,
        duration: 500,
        useNativeDriver: false,
        delay:500,
        }
      ).start();

      Animated.timing(
        opacity,
        {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
        delay:700,
        }
      ).start();


     if(!fontsLoaded){
         return <Apploading/>
     }

    return (
        <Animated.View style={{height:slideTop,display:'flex',alignItems:'center',justifyContent:'center',opacity:opacity}}>
            <Container>
                <ContLeftHeader >
                    <Text style={styles.TitleText}>Olá, Ash Ketchum</Text>
                    <Text style={styles.SubtitleText}>Bem Vindo!😀</Text>
                </ContLeftHeader>
                <ContRightHeader >
                <CustomCircle>
                    <CircleImg source={require('../../../assets/circle.png')}/>
                    <ProfilePicture source={require('../../../assets/profile.png')}/>
                    <CustomSmallCircle/> 
                </CustomCircle>
                </ContRightHeader>
            </Container>
    </Animated.View>
    )
}

const styles = StyleSheet.create({
  
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
  

export default Header;
