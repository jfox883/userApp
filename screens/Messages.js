import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import styles from '../constants/styles'

const Messages = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.shadow, styles.heading1}>Enviar</Text>
            
        </SafeAreaView>
    )
}

export default Messages
