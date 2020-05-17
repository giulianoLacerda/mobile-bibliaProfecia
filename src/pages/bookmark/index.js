import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
//import Icon from 'react-native-ionicons';

import styles from './styles';

export default function Bookmark() {
    const navigation = useNavigation();
    const route = useRoute();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>
                    Bookmark
                </Text>
            </View>
        </View>
    );
}