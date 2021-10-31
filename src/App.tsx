import React, {useEffect} from 'react'
import s from './App.module.css'
import {Counter} from "./Counter/Counter";
import {FormWithSettings} from './FormWithSettings/FormWithSettings';
import {v1} from "uuid";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {
    incValue, toggleIncStatus, toggleResetStatus, toggleSetStatus,
    updateCountValue, updateMaxValue,
    updateMessageText, updateStartValue,
} from "./bll/reducers/counter-reducer";

export type inputType = {
    id: string
    name: string
    value: number
    changeSettingsValue: (value: number) => void
}
export type InputsType = Array<inputType>


export function App() {
    let count = useSelector<AppStateType, number>(state => state.counter.count)
    let startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
    let maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    let message = useSelector<AppStateType, string>(state => state.counter.message)
    let isSetActive = useSelector<AppStateType, boolean>(state => state.counter.isSetActive)
    let isResetActive = useSelector<AppStateType, boolean>(state => state.counter.isResetActive)
    let isIncActive = useSelector<AppStateType, boolean>(state => state.counter.isIncActive)
    let dispatch = useDispatch()

    if (count === maxValue) {
        dispatch(toggleIncStatus(false))
    }


    const onIncHandler = () => {
        dispatch(toggleResetStatus(true))
        dispatch(toggleSetStatus(false))
        if (count < maxValue) {
            dispatch(incValue())
        }
    }

    const onResetHandler = () => {
        dispatch(toggleResetStatus(false))
        dispatch(updateCountValue(startValue))
        dispatch(toggleIncStatus(true))
    }

    const onSetHandler = () => {
        dispatch(updateCountValue(startValue))
        dispatch(updateMessageText(''))
        dispatch(toggleSetStatus(false))
        dispatch(toggleIncStatus(true))
    }


    useEffect(() => {
        if (startValue >= maxValue || startValue < 0 || maxValue < 0 || maxValue <= startValue) {
            dispatch(updateMessageText('error'))
            dispatch(toggleSetStatus(false))
        } else {
            dispatch(toggleSetStatus(true))
        }
    }, [dispatch,startValue, maxValue])

    useEffect(() => {
        dispatch(toggleIncStatus(false))
        dispatch(toggleResetStatus(false))
    }, [dispatch])

    const changeSettingsMaxValue = (value: number) => {
        dispatch(updateMaxValue(value))
        dispatch(updateMessageText('changes'))
        dispatch(toggleIncStatus(false))
        dispatch(toggleResetStatus(false))
    }
    const changeSettingsStartValue = (value: number) => {
        dispatch(updateStartValue(value))
        dispatch(updateMessageText('changes'))
        dispatch(toggleIncStatus(false))
        dispatch(toggleResetStatus(false))
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
            <FormWithSettings inputs={inputs} message={message} status={isSetActive} onSetHandler={onSetHandler}/>
            <Counter statusInc={isIncActive} statusReset={isResetActive} count={count} maxValue={maxValue}
                     message={message}
                     onResetHandler={onResetHandler} onIncHandler={onIncHandler}/>
        </div>
    )
}


