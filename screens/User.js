import React from 'react'
import { View, SafeAreaView, Image, ScrollView } from 'react-native';
import styles from '../constants/styles';
import { icons, COLORS, SIZES } from "../constants";
import {
    Avatar,
    Title,
    Caption,
    Text,
    TouchableRipple,
  } from 'react-native-paper';


const User = () => {
    const [usuario, setUsuario] = React.useState(usuarioData)
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                flexDirection: 'row',
                margin: 10
            }}>
                <Avatar.Image 
                    source={
                        require('../assets/foto_perfil.jpg')
                    }
                    size={100}
                    style={[styles.avatar, styles.shadow]}
                />
                <View style={{marginTop: 15}}>
                    <Text style={{
                        fontSize: SIZES.h3,
                        fontWeight: '600',
                        paddingTop: SIZES.padding,
                        paddingHorizontal: SIZES.padding * 2,
                        color: COLORS.black
                    }}>{usuario.datosPersonales.nombre}</Text>
                    <Text style={{
                        fontSize: SIZES.h4,
                        fontWeight: '400',
                        paddingHorizontal: SIZES.padding * 2,
                        color: COLORS.lightGray4
                    }}>{usuario.datosLaborales.puesto}</Text>
                </View>
            </View>
            <ScrollView>
                <View style={{
                    margin: SIZES.padding,
                    borderRadius: SIZES.radius,
                    justifyContent: 'center',
                    padding: 5,
                }}>
                    <Text style={styles.heading3}>Datos Personales</Text>
                    <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 10, alignItems: 'center'}}>
                        <Image
                            source={icons.cake}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.primary,
                                marginRight: 10
                            }}
                        />
                        <Text>{usuario.datosPersonales.fecha_nacimiento}</Text>
                    </View>

                    <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 10, alignItems: 'center'}}>
                        <Image
                            source={icons.dni}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.primary,
                                marginRight: 10
                            }}
                        />
                        <Text>{usuario.datosPersonales.dni}</Text>
                    </View>

                    <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 10, alignItems: 'center'}}>
                        <Image
                            source={icons.people}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.primary,
                                marginRight: 10
                            }}
                        />
                        <Text>{usuario.datosPersonales.estado_civil}</Text>
                    </View>
                </View>
                
                <View style={{
                    margin: SIZES.padding,
                    borderRadius: SIZES.radius,
                    justifyContent: 'center',
                    padding: 5,
                }}>
                    <Text style={styles.heading3}>Datos de Contacto</Text>
                    <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 10, alignItems: 'center'}}>
                        <Image
                            source={icons.phone}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.primary,
                                marginRight: 10
                            }}
                        />
                        <Text>{usuario.datosContacto.telefono}</Text>
                    </View>

                    <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 10, alignItems: 'center'}}>
                        <Image
                            source={icons.celular}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.primary,
                                marginRight: 10
                            }}
                        />
                        <Text>{usuario.datosContacto.celular}</Text>
                    </View>

                    <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 10, alignItems: 'center'}}>
                        <Image
                            source={icons.email}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.primary,
                                marginRight: 10
                            }}
                        />
                        <Text>{usuario.datosContacto.email}</Text>
                    </View>

                    <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 10, alignItems: 'center'}}>
                        <Image
                            source={icons.location}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.primary,
                                marginRight: 10
                            }}
                        />
                        <Text>{usuario.datosContacto.direccion}</Text>
                    </View>
                </View>

                <View style={{
                    margin: SIZES.padding,
                    justifyContent: 'space-between',
                    borderBottomWidth: 1,
                    borderTopWidth:1,
                    borderColor: COLORS.lightGray2,
                    flexDirection: 'row'
                }}>
                    <View style={{width: '50%',paddingHorizontal: 40, paddingVertical: 10, alignItems: 'center', borderRightWidth: 1, borderColor: COLORS.lightGray2}}>
                        <Text>{usuario.datosLaborales.fecha_ingreso}</Text>
                        <Text style={{color: COLORS.lightGray4, fontSize: 12}}>FECHA DE INGRESO</Text>
                    </View>

                    <View style={{width: '50%', paddingHorizontal: 40, paddingVertical: 10, alignItems: 'center'}}>
                        <Text>{usuario.datosLaborales.sueldo_bruto}</Text>
                        <Text style={{color: COLORS.lightGray4, fontSize: 12}}>SUELDO</Text>
                    </View>               
                </View>

                <View style={{
                    margin: SIZES.padding * 2,
                }}>
                    <View style={{
                        paddingVertical: SIZES.padding
                    }}>
                        <Text style={{fontSize: 10, color: COLORS.primary}}>RESPONSABLE DIRECTO:</Text>
                        <Text>{usuario.datosLaborales.responsable}</Text>
                    </View>
                    <View style={{
                        paddingVertical: SIZES.padding
                    }}>
                        <Text style={{fontSize: 10, color: COLORS.primary}}>AREA LABORAL:</Text>
                        <Text>{usuario.datosLaborales.departamento}</Text>
                    </View>
                    <View style={{
                        paddingVertical: SIZES.padding
                    }}>
                        <Text style={{fontSize: 10, color: COLORS.primary}}>OBRA SOCIAL:</Text>
                        <Text>{usuario.datosLaborales.obra_social}</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const usuarioData = {
    datosPersonales: {
        nombre: 'Jonathan Alex Fox',
        dni: '25.555.553',
        fecha_nacimiento: '28/05/1980',
        lugar_nacimiento: 'Maracaibo',
        estado_civil: 'Casado'
    },
    datosContacto: {
        telefono: '+54 9 11 4545-4545',
        celular: '+54 9 11 2255-6699',
        email: 'j.fox@outlook.com',
        direccion: 'Charcas 1459, Piso 7 Depto A'
    },
    datosLaborales: {
        fecha_ingreso: '29/09/2017',
        sueldo_bruto: '85.452,55',
        puesto: 'Programador React Native',
        responsable: 'Jonathan Fox',
        departamento: 'Informática y Tecnología',
        obra_social: 'OSECAC'
    }
}

export default User
