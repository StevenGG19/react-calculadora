import React from 'react'
import { Text, View } from 'react-native'
import { colors, style } from '../../config/theme/AppTheme';
import { BotonCalc } from '../components/BotonCalc'
import { useCalculator } from '../hooks/useCalculator';

export const CalculadoraScreen = () => {
    const { formula, numero, numeroAnterior, addValue, clear, toggleSign, borrarUltimoDigito,
        sumOperation, resOperation, multOperation, divOperation, operations } = useCalculator();

  return (
    <View style={style.calculadoraContainer}>
        <Text style={style.resultado} numberOfLines={1} adjustsFontSizeToFit>{ formula } </Text>
           { 
          (formula === numeroAnterior) ?  
          <Text style={style.historial}> </Text> :
          <Text style={style.historial} numberOfLines={1} adjustsFontSizeToFit> {numeroAnterior} </Text>
          } 

        <View style={style.row}>
            <BotonCalc text='C' buttonColor= {colors.lightGray} blackText accion={ clear }/>
            <BotonCalc text='+/-' buttonColor= {colors.lightGray} blackText accion={ toggleSign }/>
            <BotonCalc text='del' buttonColor= {colors.lightGray} blackText accion={ borrarUltimoDigito }/>
            <BotonCalc text='÷' buttonColor= {colors.orange} accion={ divOperation }/>
        </View>

        <View style={style.row}>
            <BotonCalc text='7' accion={ () => addValue('7') }/>
            <BotonCalc text='8' accion={ () => addValue('8') }/>
            <BotonCalc text='9' accion={ () => addValue('9') }/>
            <BotonCalc text='X' buttonColor= {colors.orange} accion={ multOperation }/>
        </View>

        <View style={style.row}>
            <BotonCalc text='4' accion={ () => addValue('4') }/>
            <BotonCalc text='5' accion={ () => addValue('5') }/>
            <BotonCalc text='6' accion={ () => addValue('6') }/>
            <BotonCalc text='-' buttonColor= {colors.orange} accion={ resOperation }/>
        </View>

        <View style={style.row}>
            <BotonCalc text='1' accion={ () => addValue('1') }/>
            <BotonCalc text='2' accion={ () => addValue('2') }/>
            <BotonCalc text='3' accion={ () => addValue('3') }/>
            <BotonCalc text='+' buttonColor= {colors.orange} accion={ sumOperation }/>
        </View>

        <View style={style.row}>
            <BotonCalc text='0' ancho accion={ () => addValue('0') }/>
            <BotonCalc text='.' accion={ () => addValue('.') }/>
            <BotonCalc text='=' buttonColor= {colors.orange} accion={ operations }/>
        </View>
    </View>
  )
}
