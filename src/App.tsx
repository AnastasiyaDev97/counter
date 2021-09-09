import React, {ChangeEvent, useEffect, useState} from 'react'
import s from './App.module.css'
import {Counter2} from "./Counter2/Counter2";
import {Counter1} from './Counter1/Counter1';

export type buttonType = {
    id: number
    name: string
    callback: () => void
    className: string

}
export type inputType = {
    id: number
    name: string
    value: string
    clForInput: string
    upClickHandler: () => void
    downClickHandler: () => void
}
export type InputsType = Array<inputType>
export type ButtonDataType = Array<buttonType>

export function App() {
    let [count, setCount] = useState<number | string>(0)
    let [clForButtonInc, setClForButtonInc] = useState(s.buttonActive)
    let [clForButtonSet, setClForButtonSet] = useState(s.buttonNot)
    let [clForButtonReset, setClForButtonReset] = useState(s.buttonNot)
    let [startValue, setStartValue] = useState('0')
    let [maxValue, setMaxValue] = useState('5')
    let [clForInputMax, setClForInputMax] = useState(s.input);
    let [clForInputStart, setClForInputStart] = useState(s.input);

    const onIncHandler = () => {
        if (count < maxValue) {
            count = Number(count) + 1
            setCount(count)
        }
        if (count == maxValue) {
            setClForButtonInc(s.buttonNot)
        }
        if (count > 0) {
            setClForButtonReset(s.buttonActive)
        }
    }
    const onResetHandler = () => {
        if (count > 0) {
            setCount(0)
            setClForButtonReset(s.buttonNot)
            setClForButtonInc(s.buttonActive)
        }
    }

    const onSetHandler = () => {
        if (clForButtonSet !== s.buttonNot) {
            setCount(startValue)
            setClForButtonSet(s.buttonNot)
            setToLocalStorage('maxValue',maxValue)
            setToLocalStorage('startValue',startValue)
        }
    }

    let ButtonDataCont1 = [
        {
            id: 1, name: 'set', callback: () => {
                onSetHandler()
            }, className: clForButtonSet
        }
    ]
    let ButtonDataCont2 = [
        {
            id: 1, name: 'inc', callback: () => {
                onIncHandler()
            }, className: clForButtonInc
        },
        {
            id: 2, name: 'reset', callback: () => {
                onResetHandler()
            }, className: clForButtonReset
        }
    ]
    const allSetsCorrect = (value: string, setValue: (value: string) => void) => {
        setValue(value)
        setClForButtonSet(s.buttonActive)
        setClForInputStart(s.input)
        setClForInputMax(s.input)
        setCount('enter value and press set')
    }
    const allSetsIncorr = (value: string, setValue: (value: string) => void, setClForInp: (clForInp: string) => void) => {
        setValue(value)
        setClForButtonSet(s.buttonNot)
        setClForInp(s.inputErr)
        setCount('Incorrect value!')
    }
    const setToLocalStorage = (key: string, value: string) => {
        localStorage.setItem(key, value)
    }
    const getFromLocalStorage = (key: string, setValue: (value: string) => void) => {
        let ValueFromLocStAsString = localStorage.getItem(key)

        if (ValueFromLocStAsString) {
            setValue(ValueFromLocStAsString)
            if(key==='startValue'){
                setCount(ValueFromLocStAsString)
            }
        }
    }

    useEffect(() => {
        getFromLocalStorage('maxValue',setMaxValue)
    }, [])
    useEffect(() => {
        getFromLocalStorage('startValue',setStartValue)
    }, [])

    /*   const upClickHandler = (value: string, setValue: (value: string) => void, setClForInp: (clForInp: string) => void) => {

           value=String(Number(value)+1)
           console.log(value)


           console.log(Number(value) > Number(startValue))
               if (Number(value) > -1||Number(value) > Number(startValue)) {
                   setValue(value)
                   setClForButtonReset(s.buttonActive)
                   setClForInputStart(s.input)
                   setClForInputMax(s.input)
                   setCount('enter value and press set')

                   /!*allSetsCorrect(value, setValue)*!/
               } else {
                   console.log(value)
                   console.log(maxValue)
                   console.log(startValue)
                   console.log(Number(maxValue) > Number(startValue))
                   allSetsIncorr(value, setValue, setClForInp)
               }
       }*/

    const upClickHandlerMax = () => {
        maxValue = String(Number(maxValue) + 1)
        if (Number(maxValue) > -1 && Number(maxValue) > Number(startValue)) {
            allSetsCorrect(maxValue, setMaxValue)
        } else {
            allSetsIncorr(maxValue, setMaxValue, setClForInputMax)
        }
    }
    const upClickHandlerStart = () => {
        startValue = String(Number(startValue) + 1)
        if (Number(startValue) > -1 && Number(startValue) < Number(maxValue)) {
            allSetsCorrect(startValue, setStartValue)
        } else {
            allSetsIncorr(startValue, setStartValue, setClForInputStart)
        }
    }
    /* const downClickHandler = (value: string, setValue: (value: string) => void, setClForInp: (clForInp: string) => void) => {
         /!*if (value === maxValue) {
             value = String(Number(value) - 1)
             maxValue = value
             if (Number(value) > -1 && Number(maxValue) > Number(startValue)) {

                 allSetsCorrect(value, setValue)
             } else {

                 allSetsIncorr(value, setValue, setClForInp)
             }

         }
         if (value === startValue) {
             value = String(Number(value) - 1)
             startValue = value
             if (Number(value) > -1 && Number(maxValue) > Number(startValue)) {
                 console.log(Number(maxValue) > Number(startValue));
                 allSetsCorrect(value, setValue)
             } else {
                 console.log(Number(maxValue) > Number(startValue))
                 allSetsIncorr(value, setValue, setClForInp)
             }

         }*!/
     }*/

    const downClickHandlerMax = () => {
        maxValue = String(Number(maxValue) - 1)
        if (Number(maxValue) > -1 && Number(maxValue) > Number(startValue)) {
            allSetsCorrect(maxValue, setMaxValue)
        } else {
            allSetsIncorr(maxValue, setMaxValue, setClForInputMax)
        }
    }
    const downClickHandlerStart = () => {
        startValue = String(Number(startValue) - 1)
        if (Number(startValue) > -1 && Number(startValue) < Number(maxValue)) {
            allSetsCorrect(startValue, setStartValue)
        } else {
            allSetsIncorr(startValue, setStartValue, setClForInputStart)
        }
    }

    let inputs = [{
        id: 1,
        name: 'max value:',
        value: maxValue,
        clForInput: clForInputMax,
        upClickHandler: () => {
            upClickHandlerMax()
        },
        downClickHandler: () => {
            downClickHandlerMax()
        }
    },
        {
            id: 2,
            name: 'start value:',
            value: startValue,
            clForInput: clForInputStart,
            upClickHandler: () => {
                upClickHandlerStart()
            },
            downClickHandler: () => {
                downClickHandlerStart()
            }
        },
    ]
    return (
        <div className={s.bgr}>
            <Counter1 buttons={ButtonDataCont1} inputs={inputs} count={count}
                      maxValue={Number(maxValue)}
                      startValue={Number(startValue)}/>
            <Counter2 buttons={ButtonDataCont2} count={count} maxValue={Number(maxValue)}/>
        </div>
    )
}


