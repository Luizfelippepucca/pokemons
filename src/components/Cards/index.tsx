import { Text ,FlatList,ListRenderItem,Image} from 'react-native'
import {Container,CardBody,CardBodyLeft,CardBodyRight, BadgeType} from './styles';

interface dataProps  {
    id:string,
    title:string,
    type?:string
}

export const Card = ()=>{
    const DATA:dataProps [] = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'Bulbasaur',
          type:'Venenoso',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Bulbasaur',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
          },
          {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
          },
      ];

      const renderItem:ListRenderItem<dataProps> = ({ item }) => (
          <CardBody key={item.id}>
              <CardBodyLeft>
                <Text>{item.title}</Text>
                <BadgeType><Text  style={{color:'#fff'}}>Venenoso</Text></BadgeType>
                {item.type && 
                <BadgeType><Text style={{color:'#fff'}}>Venenoso</Text></BadgeType>}
              </CardBodyLeft>
              <CardBodyRight>
                  <Text style={{textAlign:'right'}}>#001</Text> 
                  <Image 
                  source={{uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png'}} 
                  style={{width:98,height:80}}/>
            </CardBodyRight>
          </CardBody>
       
      );
    return(
      <Container>
          <FlatList 
          data={DATA} 
          renderItem={renderItem} 
          keyExtractor={item => item.id} 
          horizontal={true} 
          showsHorizontalScrollIndicator={false}/>
           <FlatList 
          data={DATA} 
          renderItem={renderItem} 
          keyExtractor={item => item.id} 
          horizontal={true} 
          showsHorizontalScrollIndicator={false}/>
           <FlatList 
          data={DATA} 
          renderItem={renderItem} 
          keyExtractor={item => item.id} 
          horizontal={true} 
          showsHorizontalScrollIndicator={false}/>
    </Container>
    );
}

export default Card;