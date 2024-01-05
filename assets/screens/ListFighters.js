import { View, Text, FlatList, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { BACKGROUND_CARD_COLOR, BACKGROUND_COLOR, BUTTON_COLOR } from '../graphics/Colors';
import Font from '../graphics/Fonts';
import FighterCard from '../components/profileInfo/FighterCard';
import { Searchbar } from 'react-native-paper';
import { collection, getDocs, doc, getDoc, query, orderBy, startAfter, limit } from "firebase/firestore";
import { db} from '../database/config';
import CustomButton from '../components/customButton/CustomButton';

const ListFighters = ({route, navigation}) => {

  const [eventData, setEventData] = useState(null);
  const { id } = route.params;
  const [fighters, setFighters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [lastDoc, setLastDoc] = useState(null);

  const newFighter = ()=>{
    navigation.navigate('PaymentTest');
  };

  const fetchDataEvent = async () => {
    const docRef = doc(db, "events", id);
    const docSnap = await getDoc(docRef); // Use await to wait for the result

    if (docSnap.exists()) {
      const data = docSnap.data();
      setEventData(data); 
      console.log('event title', eventData)
    } else {
      console.log("No such document!");
    }
  };

  const searchFighters = async () => {
    const fightersCollection = collection(db, "Fighters");
    const fightersSnapshot = await getDocs(fightersCollection);
    const fightersList = fightersSnapshot.docs.map(doc => doc.data());
    setFighters(fightersList);
  };


  /* const fetchFighters = async () => {
    let fightersCollection = collection(db, "Fighters");
    fightersCollection = query(fightersCollection, orderBy("last"), startAfter(lastDoc || null), limit(10));
    const fightersSnapshot = await getDocs(fightersCollection);
    const fightersList = fightersSnapshot.docs.map(doc => doc.data());
    setLastDoc(fightersSnapshot.docs[fightersSnapshot.docs.length - 1]);
    setFighters(prevFighters => [...prevFighters, ...fightersList]);
  }; */

  const filteredFighters = fighters.filter(fighter =>
    fighter.last && fighter.last.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    fetchDataEvent();
    searchFighters();
    }, []
  );

  /* useEffect(()=>{
    if (eventData != null){
      setEventData (eventData)
    }
  }, []
  ); */


  return (
    <View style={styles.container}>
      <View style = {styles.titleContainer}>
        <Text style = {Font.title}>You are registering for</Text>
        <Text style = {Font.title}>{eventData ? eventData['event_name'] : 'Loading...'}</Text>
      </View>
      
      <View>
        <Searchbar
        placeholder='Enter your lastname'
        placeholderTextColor={BUTTON_COLOR}
        style={styles.searchbar}
        iconColor = {BUTTON_COLOR}
        value={searchQuery}
        onChangeText={setSearchQuery}/>
      </View>
      
      {/* {filteredFighters.map(fighter => (
        <FighterCard
          key={fighter.pmt_id} // Add this line
          FirstName={fighter.first}
          LastName={fighter.last}
          GymName={fighter.gym}
        />
      ))} */}

      {searchQuery === '' ? (
        <View style = {styles.addFightersContainer}>
          <View style = {styles.addFightersText}>
            <Text style = {Font.infoText}>If you don't find your fighter profile here, please create a new one and register to the event</Text>
            <CustomButton
            text="Create a new PMT Fighter"
            onPress={newFighter}/>
            
          </View>
          
        </View>
        
      ) : (
        <FlatList
          data={filteredFighters}
          renderItem={({ item: fighter }) => (
            <FighterCard
              key={fighter.pmt_id}
              FirstName={fighter.first}
              LastName={fighter.last}
              GymName={fighter.gym}
            />
          )}
          onEndReached={searchFighters}
        />
      )}
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:BACKGROUND_COLOR,
    paddingTop:30,
    paddingBottom:90,
    
  },

  titleContainer:{
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal: 3,
    marginVertical: 6,
  },

  searchbar: {
    marginHorizontal: 15,
    marginVertical: 18,
    borderColor: BACKGROUND_CARD_COLOR,
    borderWidth: 3,
  },

  addFightersContainer:{
    alignItems:'center',
    justifyContent: 'center',
    paddingVertical:30,
    
  },

  addFightersText:{
    paddingHorizontal:15,
    alignItems:"center",
    justifyContent:"center",

  }
})

export default ListFighters

