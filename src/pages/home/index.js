import React, { useLayoutEffect, useState,  } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AntDesign, Feather, FontAwesome, Ionicons } from '@expo/vector-icons';
//import Icon from 'react-native-ionicons';

import styles from '../home/styles';

export default function Home(props) {
  const navigation = useNavigation();
  const { count } = props;
  const study = [
      {
        "dia": 0,
        "titulo": "Prefácio",
        "texto": "Genesis 1",
        "lido": true,
        "marcado": false
      },
      {
        "dia": 1,
        "titulo": "Por Que foi Permitido o Pecado?",
        "texto": "Genesis 2",
        "lido": true,
        "marcado": false
      },
      {
        "dia": 2,
        "titulo": "A Criação",
        "texto": "Genesis 3",
        "lido": true,
        "marcado": true
      },
      {
        "dia": 3,
        "titulo": "A Semana Literal",
        "texto": "Genesis 4",
        "lido": false,
        "marcado": false
      },
      {
        "dia": 4,
        "titulo": "A Tentação e a Queda",
        "texto": "Genesis 5",
        "lido": false,
        "marcado": true
      },
      {
        "dia": 5,
        "titulo": "O Plano da Redenção",
        "texto": "Genesis 6",
        "lido": false,
        "marcado": false
      },
      {
        "dia": 6,
        "titulo": "Caim e Abel",
        "texto": "Genesis 7",
        "lido": false,
        "marcado": false
      }
    ]

  function navigateToStudy(value, title) {
    navigation.navigate('Study', { value, title });
  }
    
    return (
        <View style={styles.container}>
            <FlatList 
                data={study}
                style={styles.incidentList}
                keyExtractor={day => String(day.dia)}
                showsVerticalScrollIndicator={false}
                //onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({ item: day }) => (
                    <View style={styles.incident}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      
                      <View>
                        <Text style={styles.incidentProperty}>Dia {day.dia}</Text>
                      </View>
                      
                      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}} >
                        <View style={{ alignSelf: "center", flexDirection: 'row', paddingHorizontal:5 }}>
                          <FontAwesome name={day.marcado ? "bookmark" : "bookmark-o"} size={16} color={day.marcado ? '#000' : '#949494'} />
                        </View>

                        <View style={{ alignSelf: "center", flexDirection: 'row' }}>
                          <AntDesign name={day.lido ? "checkcircle" : "checkcircleo"} size={15} color={day.lido ? '#000' : '#949494'} />
                        </View>
                      </View>

                      </View>
                        <View style={styles.incidentTitleMarker}>
                          
                        <Text style={styles.incidentProperty}>{day.titulo}</Text>
                          
                        </View>
                        <Text style={styles.incidentValue}>{day.texto}</Text>

                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={() => navigateToStudy(day.dia, day.titulo)}
                            >

                            <Text style={styles.detailsButtonText}>Estudar</Text>
                            <Feather name="arrow-right" size={16} color="#000" />
                        </TouchableOpacity>
                    </View>
                )}
                />
        </View>
    );
}