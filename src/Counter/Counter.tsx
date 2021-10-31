import s from '../FormWithSettings/FormWithSettings.module.css'
import {Display} from "../Display/Display";
import {Button} from "../Button/Button";
import React from "react";


export type CounterPropsType = {
    count: number
    maxValue: number
    message: string
    statusInc: boolean
    statusReset: boolean
    onResetHandler: () => void
    onIncHandler: () => void
}

export const Counter = (props: CounterPropsType) => {
    return (
        <div className={s.counterWrapper}>
            <Display count={props.count} maxValue={props.maxValue} message={props.message}/>
            <div className={s.buttons}>
                <Button title={'inc'} callback={props.onIncHandler} status={props.statusInc}/>
                <Button title={'reset'} callback={props.onResetHandler} status={props.statusReset}/>
            </div>
        </div>
    )
}