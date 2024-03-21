import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { colors } from '../../config/theme/AppTheme';

interface Props {
  text: string;
  buttonColor?: string;
  blackText?: boolean;
  ancho?: boolean;
  accion: () => void;
}

export const BotonCalc = ({text, buttonColor = colors.darkGray, blackText = false, ancho = false, accion}: Props) => {
  return (
    <Pressable style={({pressed}) => ({
      ...style.boton,
      backgroundColor: buttonColor,
      opacity: (pressed) ? 0.8 : 1,
      width: (ancho) ? 180 : 80
    })} 
    onPress={() => accion()}>
      <Text style={{ ...style.botonTexto, color: (blackText) ? 'black' : 'white'}}> {text} </Text>
    </Pressable>
  )
}

const style = StyleSheet.create({
    boton: {
        borderRadius: 100,
        height: 80,
        width:80,
        justifyContent:"center",
        marginHorizontal:10
    },
    botonTexto: {
        textAlign:"center",
        fontSize:30,
        padding:10,
        fontWeight:"400"
    }
});