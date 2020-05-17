import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

export default function Read() {
    const navigation = useNavigation();
    const route = useRoute();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>
                    Read
                </Text>
            </View>
        </View>
    );
}