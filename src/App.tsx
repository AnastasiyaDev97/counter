import React, {useEffect, useState} from 'react'
import s from './App.module.css'
import {Counter} from "./Counter/Counter";
import {FormWithSettings} from './FormWithSettings/FormWithSettings';
import {v1} from "uuid";

export type buttonType = {
    id: string
    name: string
    callback: () => void
    status: boolean

}
export type inputType = {
    id: string
    name: string
    value: number
    changeSettingsValue: (value: number) => void
}
export type InputsType = Array<inputType>
export type ButtonDataType = Array<buttonType>

export function App() {

    let [count, setCount] = useState<number>(0)
    let [startValue, setStartValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)
    let [message, setMessage] = useState('')
    let [isSetActive, setIsSetActive] = useState(true)
    let [isResetActive, setIsResetActive] = useState(!isSetActive && true)
    let [isIncActive, setIsIncActive] = useState(!isSetActive && true)

    let ButtonsData = [
        {
            id: v1(), name: 'set', callback: () => {
                onSetHandler()
            }, status: isSetActive
        },
        {
            id: v1(), name: 'inc', callback: () => {
                onIncHandler()
            }, status: isIncActive
        },
        {
            id: v1(), name: 'reset', callback: () => {
                onResetHandler()
            }, status: isResetActive
        }
    ]


    const onIncHandler = () => {
        setIsResetActive(true)
        if (count < maxValue) {
            count++
            setCount(count)
        }
        if (count === maxValue) {
            setIsIncActive(false)
        }
    }

    const onResetHandler = () => {
        setIsResetActive(false)
        setCount(startValue)
        setIsIncActive(true)

    }

    const onSetHandler = () => {
        setCount(startValue)
        setMessage('')
        setIsSetActive(false)
        setIsIncActive(true)
        setToLocalStorage('maxValue', maxValue)
        setToLocalStorage('startValue', startValue)
    }


    useEffect(() => {
        getFromLocalStorage('maxValue', setMaxValue)
        getFromLocalStorage('startValue', setStartValue)
    }, [])

    const setToLocalStorage = (key: string, value: number) => {
        localStorage.setItem(key, JSON.stringify(value))
    }

    const getFromLocalStorage = (key: string, setValue: (value: number) => void) => {
        let ValueFromLocStAsString = localStorage.getItem(key)
        if (ValueFromLocStAsString) {
            setValue(JSON.parse(ValueFromLocStAsString))
            if (key === 'startValue') {
                setCount(JSON.parse(ValueFromLocStAsString))
            }
        }
    }

    useEffect(() => {
        if (startValue >= maxValue || startValue < 0 || maxValue < 0 || maxValue <= startValue) {
            setMessage('error')
            setIsSetActive(false)
        } else {
            setIsSetActive(true)
        }
    }, [startValue, maxValue])


    const changeSettingsMaxValue = (value: number) => {
        setMaxValue(value)
        setMessage('changes')
    }
    const changeSettingsStartValue = (value: number) => {
        setStartValue(value)
        setMessage('changes')
    }

    let inputs = [{
        id: v1(), name: 'max value:', value: maxValue, changeSettingsValue: (value: number) => {
            changeSettingsMaxValue(value)
        }
    },
        {
            id: v1(), name: 'start value:', value: startValue, changeSettingsValue: (value: number) => {
                changeSettingsStartValue(value)
            }
        },
    ]
    return (
        <div className={s.bgr}>
            <FormWithSettings buttons={ButtonsData} inputs={inputs} count={count} message={message}
                              maxValue={maxValue}
                              startValue={startValue}/>
            <Counter buttons={ButtonsData} count={count} maxValue={maxValue} message={message}/>
        </div>
    )
}


