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

const messagesData = [
    {
        id: 1,
        title: 'Titulo del Mensaje',
        msj: 'Es un mensale de prueba para diseñar la pantalla principal y el listado de notificacions',
        type: 0,
        date: '15/01/21',
        time: '13:55',
        status: 0
    },
    {
        id: 2,
        title: 'Título del mensaje 2',
        msj: 'Es un segundo mensaje en al lista de notificaciones...',
        type: 0,
        date: '12/01/21',
        time: '9:20',
        status: 1
    },
    {
        id: 3,
        title: 'Llego tarde!',
        msj: 'Este es un mensaje para mostar el envío de una alerta a la empresa',
        type: 1,
        date: '10/01/21',
        time: '17:33',
        status: 0
    },
]

const Home = () => {

    const [messages, setMessages] = React.useState(messagesData)

        const renderList = ({item}) => {
        return (
            <TouchableOpacity 
                style={{
                    marginBottom: SIZES.padding,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.white,
                    justifyContent: 'center',
                    ...styles.shadow
                }}
            >
                <View style={{
                    padding: SIZES.padding
                }}>
                    <Text style={styles.heading2}>
                        {item.title} 
                    </Text>
                    <Text numberOfLines={2} stype={{padding: SIZES.padding2,}}>
                        {item.msj}
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginRight: SIZES.padding,
                        paddingBottom:5
                    }}    
                >
                    <Image 
                        source={(item.type == 0 ) ? icons.received : icons.sended}
                        resizeMode="contain"
                        style= {{
                            width: 25,
                            height: 25,
                            marginLeft: SIZES.padding,
                            tintColor: (item.type == 0) ? '#31aaeb' : '#2deb49'
                        }}
                    />
                    <View>
                        <Text style={{
                            fontSize: SIZES.h4 - 8,
                            color: COLORS.darkgray
                        }}>
                            {item.date}
                        </Text>
                        <Text style={{
                            fontSize: SIZES.h4 - 8,
                            color: COLORS.darkgray
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
