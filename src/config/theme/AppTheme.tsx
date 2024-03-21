import { StyleSheet } from "react-native";

export const colors = {
    darkGray: '#2D2D2D',
    lightGray:'#9B9B9B',
    orange:'#FF9427',
    textPrimary:'white',
    textSecondary:'#666666',
    background:'#000000'
}

export const style = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.background
    },
    calculadoraContainer: {
        flex: 1,
        paddingHorizontal:20,
        justifyContent: 'flex-end'
    },
    resultado: {
        color:colors.textPrimary,
        fontSize: 70,
        textAlign: 'right',
        fontWeight:'400'
    },
    historial: {
        color:colors.textSecondary,
        fontSize: 40,
        textAlign: 'right',
        fontWeight:'300',
        marginBottom: 10 
    },
    row: {
        flexDirection:"row",
        justifyContent:"center",
        marginBottom:18,
        paddingHorizontal:10
    }
});