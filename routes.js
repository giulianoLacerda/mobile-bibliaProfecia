import React, { useState, useLayoutEffect} from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Ionicons, FontAwesome, SimpleLineIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';

import Home from './src/pages/home';
import Bookmark from './src/pages/bookmark';
import Read from './src/pages/read';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function getHeaderTitle(route) {
  // Access the tab navigator's state using `route.state`
  const routeName = route.state
    ? // Get the currently active route name in the tab navigator
      route.state.routes[route.state.index].name
    : // If state doesn't exist, we need to default to `screen` param if available, or the initial screen
      // In our case, it's "Feed" as that's the first screen inside the navigator
      route.params?.screen || 'Feed';

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Bookmark':
      return 'Bookmark';
    case 'Read':
      return 'Read';
  }
}

function BottomTabs({ navigation }) {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View>
          <TouchableOpacity style={styles.container} onPress={() => setCount(c => c + 1)}>
            <Ionicons name="ios-menu" size={28} color="#000" />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity style={styles.container} onPress={() => setCount(c => c + 1)}>
          <Ionicons name="ios-notifications" size={28} color="#000" />
        </TouchableOpacity>
      ),
    });
  }, [navigation, setCount]);

  
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
            return <SimpleLineIcons name={iconName} size={24} color={color} />;
          } else if (route.name === 'Bookmark') {
            iconName = focused ? 'bookmark-o' : 'bookmark-o';
            return <FontAwesome name={iconName} size={24} color={color} />;
          } else if (route.name === 'Read') {
            iconName = focused ? 'md-done-all' : 'md-done-all';
            return <Ionicons name={iconName} size={24} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#e65719',
        inactiveTintColor: '#949494',
      }}>
        <BottomTab.Screen name="Home"> 
          {props => <Home {...props} count={count}/> }
        </BottomTab.Screen>

        <BottomTab.Screen name="Bookmark" component={Bookmark} />
        <BottomTab.Screen name="Read" component={Read} />
    </BottomTab.Navigator>
  )
}


export default function Routes() {
    return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: true }}>
              <Stack.Screen
                            name="Home" 
                            component={BottomTabs}
                            options={({ navigation, route }) => ({
                              headerTitle: getHeaderTitle(route),
                              headerStyle: {
                                
                                //backgroundColor: '#000',
                                
                              },
                              headerTintColor: '#000',
                              headerTitleStyle: styles.headerTitle
                            })}
                          />
          </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
  container: {
      //flex: 1,
      //flexDirection:'row',
      //paddingHorizontal: 24,
      //paddingTop: Constants.statusBarHeight + 20,
      backgroundColor: '#FFF',
      //paddingVertical: 45,
      alignItems: 'center',
      //height: 45,
      //marginTop: 15,
      //paddingBottom: 500,
      //marginBottom: 15,
      marginHorizontal:24,
      //borderWidth: 5,
      //height: 45,
      //elevation: 1,
      
  },

  header: {
      flexDirection:'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
  },

  headerTitle: {
      fontSize: 22,
      textAlign:'center',
      flex: 1,
      color: '#000',
      //fontWeight: 'bold',
      //color: '#E82041',
      //paddingLeft: 110,
  }
})



/*export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Home" component={Home} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}*/