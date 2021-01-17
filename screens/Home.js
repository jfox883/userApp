import React from 'react'
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    Image,
} from 'react-native'
import { icons, COLORS, SIZES } from "../constants";
import styles from "../constants/styles";


const Home = () => {
    const messagesData = [
        {
            id: 1,
            msj: 'Es un mensale de prueba para diseñar la pantalla principal y el listado de notificacions',
            type: 0,
            date: '15/01/21',
            time: '13:55'
        },
        {
            id: 2,
            msj: 'Es un segundo mensaje en al lista de notificaciones...',
            type: 0,
            date: '12/01/21',
            time: '9:20'
        },
        {
            id: 3,
            msj: 'Este es un mensaje para mostar el envío de una alerta a la empresa',
            type: 1,
            date: '10/01/21',
            time: '17:33'
        },
    ]

    const [messages, setMessages] = React.useState(messagesData)


    const renderList = ({item}) => {
        return (
            <TouchableOpacity 
                style={{
                    marginBottom: SIZES.padding,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS['light'].white,
                    justifyContent: 'center',
                    ...styles.shadow
                }}
            >
                <View style={{
                    padding: SIZES.padding
                }}>
                    <Text style={styles.heading2}>
                        {item.type} 
                    </Text>
                    <Text stype={{padding: SIZES.padding2,}}>
                        {item.msj}
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginRight: SIZES.padding
                    }}    
                >
                    <Image 
                        source={item.type = 0 ? icons.received : icons.sended}
                        resizeMode="contain"
                        style= {{
                            width: 25,
                            height: 25,
                            marginLeft: SIZES.padding
                        }}
                    />
                    <View>
                        <Text style={{
                            fontSize: SIZES.h4 - 8
                        }}>
                            {item.date}
                        </Text>
                        <Text style={{
                            fontSize: SIZES.h4 - 8
                        }}>
                            {item.time}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.shadow, styles.heading1}>Notificaciones</Text>
            <FlatList 
                data={messages}
                keyExtractor={item => `${item.id}`}
                renderItem={renderList}
                contentContainerStyle= {{
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: 30,
                }}
            />
        </SafeAreaView>
    )
}

export default Home
