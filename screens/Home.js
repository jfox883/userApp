import React, { useState, useEffect, useRef } from 'react'
import { 
    View,
    Text,
    RefreshControl,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    Image,
} from 'react-native'
import { icons, COLORS, SIZES } from "../constants";
import styles from "../constants/styles";
import * as Animation from 'react-native-animatable';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants'

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
}

const Home = () => {
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const [refreshing, setRefreshing] = React.useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setMessages(messagesData)
    
        wait(2000).then(() => setRefreshing(false));
    }, []);

    useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    
        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
          setNotification(notification);
        });
    
        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
          console.log(response);
        });
    
        return () => {
          Notifications.removeNotificationSubscription(notificationListener);
          Notifications.removeNotificationSubscription(responseListener);
        };
      }, []);

    registerForPushNotificationsAsync = async() => {
        let token;
        if (Constants.isDevice) {
          const { status: existingStatus } = await Notifications.getPermissionsAsync();
          let finalStatus = existingStatus;
          if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
          }
          if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
          }
          token = (await Notifications.getExpoPushTokenAsync()).data;
          console.log(token);
        } else {
          alert('Must use physical device for Push Notifications');
        }
      
        if (Platform.OS === 'android') {
          Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
          });
        }
      
        return token;
      }

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
                            tintColor: (item.type == 0) ? '#31aaeb' : COLORS.green
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
            <Text style={styles.shadow, styles.heading1}>NOVEDADES</Text>
            <Animation.View animation="fadeInUpBig">
                <FlatList 
                    data={messages}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderList}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
                    }
                    contentContainerStyle= {{
                        paddingHorizontal: SIZES.padding,
                        paddingBottom: 30,
                    }}
                />
            </Animation.View>
        </SafeAreaView>
    )
}

const messagesData = [
    {
        id: 1,
        title: 'Mensaje Urgente!!!',
        msj: 'Es un mensale de prueba para mostrar la pantalla principal y el listado de notificaciones',
        type: 0,
        date: '15/01/21',
        time: '13:55',
        status: 0
    },
    {
        id: 2,
        title: 'Mensaje 2...',
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
    {
        id: 4,
        title: 'Título de Otro mensaje.',
        msj: 'React Native is an open-source mobile application framework created by Facebook, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use Reacts framework along with native platform capabilities',
        type: 0,
        date: '15/01/21',
        time: '13:55',
        status: 0
    },
    {
        id: 5,
        title: 'Importante!!!',
        msj: 'Expo is an open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.   ',
        type: 1,
        date: '12/01/21',
        time: '9:20',
        status: 1
    },
    {
        id: 6,
        title: 'Titulo 5',
        msj: 'Este es un mensaje para mostar el envío de una alerta a la empresa',
        type: 1,
        date: '10/01/21',
        time: '17:33',
        status: 0
    },
]

export default Home
