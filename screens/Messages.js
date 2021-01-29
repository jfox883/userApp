import React, { useState, useEffect, useRef } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Alert } from 'react-native'
import { CheckBox } from 'react-native-elements'
import styles from '../constants/styles'
import { icons, COLORS, SIZES } from '../constants'
import * as Animation from 'react-native-animatable'
import ModalSelector from 'react-native-modal-selector'

const Messages = () => {
    const [initialState, setInitialState] = React.useState({})
    const [toggleCheckBox, setToggleCheckBox] = useState(true)
    const [typePicker, setTypePicker] = useState(null)
    const [filterSetector, setFilterSelector] = React.useState('')
    const [message, setMessage] = React.useState({
        title: '',
        type: null,
        message: '',
        sendRRHH: false,
        sendResponsable: false,
        date: '',
        time: ''
    })
    
    const textInputTitle = React.createRef()
    const textInputMessage = React.createRef()

    useEffect(() => {
        setInitialState(message)
    }, [])

    const resetForm = () => {
        textInputTitle.current.clear()
        textInputMessage.current.clear()
        textInputTitle.current.focus()
        setFilterSelector(' ')
        setMessage(initialState)
    }

    const sendForm = () => {
        Alert.alert('Completado...','Novedad Enviada!')
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.shadow, styles.heading1}>ENVIAR NOVEDAD</Text>
            <Animation.View 
                style={{
                    backgroundColor: COLORS.white,
                    borderRadius: SIZES.radius * 2,
                    marginHorizontal: SIZES.padding2,
                    flex:3,
                    ...styles.shadow
                }}
                animation="fadeInUpBig"
            >
                <View style={{
                    flexDirection: 'row',
                    borderBottomWidth: 1,
                    borderBottomColor: COLORS.lightGray2,
                    width: '100%',
                    height: 50,
                    padding: SIZES.padding
                }}>
                    <Text style={{
                        textAlignVertical: 'center',
                        height: 40,
                        width: 65,
                        paddingHorizontal: SIZES.padding * 0.5,
                        paddingVertical: SIZES.padding,
                        color: COLORS.darkgray,
                    }}>Título</Text>
                    <TextInput 
                        style={{
                            height: 40,
                            width: '90%',
                            paddingHorizontal: SIZES.padding,
                        }}
                        ref={textInputTitle}
                        placeholder="Título del mesaje"
                        placeholderTextColor={COLORS.lightGray2}
                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                    borderBottomWidth: 1,
                    borderBottomColor: COLORS.lightGray2,
                    width: '100%',
                    height: 50,
                    padding: SIZES.padding
                }}>
                    <Text style={{
                        textAlignVertical: 'center',
                        height: 40,
                        width: 65,
                        paddingHorizontal: SIZES.padding * 0.5,
                        paddingVertical: SIZES.padding,
                        color: COLORS.darkgray,
                    }}>Tipo</Text>
                    <ModalSelector 
                        style={{
                            paddingTop: 2,
                            paddingLeft: 2,
                            width: '80%',
                            height: 45,
                        }}
                        initValueTextStyle={{
                            fontSize: 14,
                            textAlign: 'left',
                            color: COLORS.lightGray2
                        }}
                        selectStyle={{
                            borderWidth: 0,
                        }}
                        selectTextStyle={{
                            textAlign: 'left',
                            fontSize: 14,
                            fontWeight: 'normal'
                        }}
                        selectedItemTextStyle={{
                            fontWeight: 'bold',
                            color: COLORS.red
                        }}
                        data={typeMessage}
                        selectedKey={filterSetector}
                        initValue='Seleccionar...'
                        onChange={(op) => setTypePicker(op)}
                    />
                    
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    borderBottomWidth:1,
                    borderBottomColor: COLORS.lightGray2,
                    width: '100%',
                    padding: SIZES.padding,
                }}>
                    <Text style={{
                        textAlignVertical: 'center',
                        height: 40,
                        width: 65,
                        paddingHorizontal: SIZES.padding * 0.5,
                        paddingVertical: SIZES.padding,
                        color: COLORS.darkgray,
                    }}>Mensaje</Text>
                    <TextInput 
                        style={{
                            height: '70%',
                            padding: SIZES.padding2,
                            textAlignVertical: 'top',
                        }}
                        ref={textInputMessage}
                        multiline={true}
                        placeholder="Descripción de la novedad"
                        placeholderTextColor={COLORS.lightGray2}
                    />
                </View>
                <View style={{
                    height: 50
                }}>
                    <CheckBox 
                        containerStyle={{
                            backgroundColor: 'transparent',
                            borderWidth: 0
                        }}
                        textStyle={{
                            fontWeight: 'normal'
                        }}
                        title='Enviar a Responsable de área'
                        checked={toggleCheckBox}
                        onPress={() => setToggleCheckBox(!toggleCheckBox)}
                    />
                </View>
            </Animation.View>
            <View
                style={{
                    flex:0.5,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <TouchableOpacity 
                    style={styles.mainButton}
                    onPress={sendForm}
                >
                    <Text style={{
                        textAlign: 'center',
                        color: COLORS.white
                    }}>Enviar</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.secondButton}
                    onPress={resetForm}
                >
                    <Text style={{
                        textAlign: 'center',
                        color: COLORS.white
                    }}>Borrar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const typeMessage = [
    {
        key: 1,
        label: 'Actualización de Datos',
        value: 1,
    },
    {
        key: 2,
        label: 'Informar Novedad',
        value: 2
    },
    {
        key: 3,
        label: 'Otros',
        value: 5

    },
    {
        key: 4,
        label: 'Solicitud de Licencia',
        value: 3
    },
    {
        key: 5,
        label: 'Vacaciones',
        value: 4
    }
]

export default Messages
