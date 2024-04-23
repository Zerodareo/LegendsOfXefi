import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './.expo/CustomPages/Home';
import PageTest from './.expo/CustomPages/PageTest';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Liste Personnages" component={Home} />
      <Stack.Screen name="Fiche Personnage" component={PageTest} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text style={styles.text}>LEGENDS OF XEFI {'\n'}</Text>
        <Text style={styles.description1}>Bienvenue dans les Terres de Xefi</Text>
        <Text style={styles.description2}> Plongez dans le monde enchanté de Legends of Xefi, un jeu de rôle épique qui vous emmène au cœur d'une saga héroïque où le destin de nombreux royaumes est en jeu. {'\n'} </Text> 
        <Text style={styles.description3}> Explorez des Paysages Envoûtants {'\n'} </Text>
        <Text style={styles.description4}> Voyagez à travers des forêts ancestrales, des montagnes interdites et des royaumes souterrains oubliés. {'\n'}Chaque région de Xefi offre ses propres défis et ses secrets à découvrir ! {'\n'}</Text>
        {/*<Text style={styles.description5}> Rencontrez des Personnages Inoubliables {'\n'} </Text>
        <Text style={styles.description6}> Xefi est peuplée de personnages complexes dotés de leurs propres histoires et motivations. {'\n'} 
        Forgez des alliances ou rivalisez avec des héros et des antagonistes qui ne sont pas toujours ce qu'ils semblent être. {'\n'}
        Votre capacité à interagir avec ces personnages déterminera votre capacité à réussir dans les quêtes et à influencer le monde autour de vous.</Text>
        {/* Bouton pour accéder à une autre page */}
        <Text style={styles.description7}> Mystic Forge Studios </Text>
 
        <Text style={styles.description8}>Situés au cœur de l'innovation et de la créativité, nous sommes une équipe passionnée de développeurs, de designers et de conteurs dédiée à la création d'expériences vidéoludiques immersives et captivantes.</Text>
      </View>
      
      <Tab.Navigator>
        <Tab.Screen name="LEGENDS OF XEFI  : Page d'accueil" component={StackNavigator} />
        <Tab.Screen name="A Propos" component={PageTest} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B5998',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    alignItems : 'center',
    color: '#3B5998',
    fontSize: 24,
  },
  description1 :{
    fontWeight: 'bold',
    alignItems : 'center',
    justifyContent: 'center',
    color : '#C0C0C0',
    fontSize : 24,
  },
  description2 :{
    alignItems : 'center',
    justifyContent: 'center',
    color : '#C0C0C0',
    fontSize : 14,
  },
  description3 :{
    fontWeight: 'bold',
    alignItems : 'center',
    justifyContent: 'center',
    color : '#C0C0C0',
    fontSize : 24,
  },
  description4 : {
    alignItems : 'center',
    justifyContent: 'center',
    color : '#C0C0C0',
    fontSize : 14,
  },
  description5: {
    fontWeight: 'bold',
    alignItems : 'center',
    justifyContent: 'center',
    color : '#C0C0C0',
    fontSize : 24,
  },
  description6 : {
    alignItems : 'center',
    justifyContent: 'center',
    color : '#C0C0C0',
    fontSize : 14,
  },
  description7 : {
    fontWeight: 'bold',
    alignItems : 'center',
    justifyContent: 'center',
    color : '#C0C0C0',
    fontSize : 24,
  },
  description8 :{
    alignItems : 'center',
    justifyContent: 'center',
    color : '#C0C0C0',
    fontSize : 14,
  }
});
