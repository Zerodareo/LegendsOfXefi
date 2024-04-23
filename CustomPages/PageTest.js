import React from 'react';
import { Button, Text, StyleSheet, View } from 'react-native'; // Importation des composants nécessaires

const PageTest = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mystic Forge Studios </Text>
        
    <Text style={styles.text1}> Situés au cœur de l'innovation et de la créativité, nous sommes une équipe passionnée de développeurs, de designers et de conteurs dédiée à la création d'expériences vidéoludiques immersives et captivantes. </Text>
        <Text style={styles.text2}> Notre Mission</Text> 
    
       <Text style={styles.text3}> Chez Mystic Forge Studios, notre mission est de transcender les frontières traditionnelles du jeu vidéo pour offrir des aventures uniques et mémorables. {'\n'} Nous croyons en la puissance du jeu pour rassembler les gens, raconter des histoires profondes et offrir des expériences enrichissantes qui restent avec les joueurs longtemps après qu'ils aient mis de côté leur console.</Text> 
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title :{
    fontSize : 24, 
  },
  text1 :{
    fontSize : 14,
  },
  text2:{
    fontSize : 24, 
  },
  text3:{
    fontSize : 14,
  }
});

export default PageTest;
