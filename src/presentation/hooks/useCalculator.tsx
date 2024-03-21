import { useEffect, useRef, useState } from 'react'

enum Operation {
    sum = '+',
    div = '÷',
    mult = 'x',
    res = '-'
}

export const useCalculator = () => {
    const [formula, setformula] = useState('');
    const [numero, setnumero] = useState('0');
    const [numeroAnterior, setnumeroAnterior] = useState('0');
    const lastOperator = useRef<Operation>();

    useEffect(() => {
        if (lastOperator.current) {
            const firstPart = formula.split(" ").at(0);
            setformula(`${firstPart} ${lastOperator.current} ${numero}`);
        } else {
            setformula(numero);
        }
    }, [numero]);
    
    useEffect(() => {
        setnumeroAnterior(`${calculateSubResult()}`);
    }, [formula]);
    

    const addValue = (addValue: string) => {

        //no aceptar mas de un punto
        if(numero.includes('.') && addValue === '.') return;
        // si el numero empieza con cero
        if(numero.startsWith('0') || numero.startsWith('-0')) {
            //si la entrada es un punto
            if(addValue === '.') {
                setnumero(numero + addValue);

            // evaluar si es otro cero y punto decimal
            } else if(addValue === '0' && numero.includes('.')) {
                setnumero(numero + addValue);

            //evaluar si el numero es diferente de cero y no hay punto
            } else if(addValue !== '0' && !numero.includes('.')) {
                setnumero(addValue);
            } else if(addValue === '0' && !numero.includes('.')) {
                return;
            } else {
                setnumero(numero + addValue);  
            }
        } else {
            setnumero(numero + addValue);
        }
    }

    const clear = () => {
        setnumero('0');
        setnumeroAnterior('');
        setformula(' ');
        lastOperator.current = undefined;
    }

    const toggleSign = () => {
        if(numero.includes('-')) {
            setnumero(numero.replace('-', ''));
        } else {
            setnumero('-' + numero);
        }
    }

    const borrarUltimoDigito = () => {
        if(numero.length == 1 || (numero.length == 2 && numero.startsWith('-'))) {
            setnumero('0');
        } else {
            setnumero(numero.substring(0, numero.length - 1));
        }
    }

    const setLastNumber = () => {
        operations();
        if(numero.endsWith('.')) {
            setnumeroAnterior(numero.slice(0, -1));
        } else {
            setnumeroAnterior(numero);
        }
        setnumero('0');
    }

    const sumOperation = () => {
        setLastNumber();
        lastOperator.current = Operation.sum;
    }

    const resOperation = () => {
        setLastNumber();
        lastOperator.current = Operation.res;
    }

    const multOperation = () => {
        setLastNumber();
        lastOperator.current = Operation.mult;
    }

    const divOperation = () => {
        setLastNumber();
        lastOperator.current = Operation.div;
    }

    const operations = () => {
        const result = calculateSubResult();
        setformula(`${result}`);
        lastOperator.current = undefined;
        setnumeroAnterior('');
    }

    const calculateSubResult = () : number => {
        const [firstValue, operation, secondValue] = formula.split(" "); 
        const num1 = Number( firstValue );
        const num2 = Number( secondValue );

        if(isNaN(num2)) return num1;

        switch (operation) {
            case Operation.sum:
                return num1 + num2;
            case Operation.res:
                return num1 - num2;
            case Operation.mult:
                return num1 * num2;
            case Operation.div:
                return num1 / num2;
            default:
                throw new Error("operacion no valida");

        }
    }

  return (
    {
        //variables
        formula,
        numero,
        numeroAnterior,
        //metodos
        addValue,
        clear,
        toggleSign,
        borrarUltimoDigito,
        sumOperation,
        resOperation,
        multOperation,
        divOperation,
        operations
    }
  )
}
