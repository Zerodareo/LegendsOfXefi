import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Card } from 'react-native';
import axios from 'axios';

const Home = () => {
  const [characterIds] = useState([]);

  useEffect(() => {
    // Effectue une requête pour récupérer la liste des personnages depuis l'API
    axios.get('http://api-fantasygame.eu-4.evennode.com/get-characters')

      .catch(error => {
        console.error('Error fetching character IDs:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Liste des IDs des personnages :</Text>
      <View>
        {/* Utilisation de map pour parcourir et afficher chaque ID */}

        {characterIds.map((character) => (
            
          <Card.Title> {character.name} </Card.Title>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default Home;
