import s from '../FormWithSettings/FormWithSettings.module.css'
import {Display} from "../Display/Display";
import {Button} from "../Button/Button";
import React from "react";
import {ButtonDataType} from "../App";


export type CounterPropsType = {
    buttons: ButtonDataType
    count?: number | undefined | string
    maxValue: number
    message: string
}

export const Counter = (props: CounterPropsType) => {
    let buttons = props.buttons.filter(m => m.name !== 'set')
    return (
        <div className={s.counterWrapper}>
            <Display count={props.count} maxValue={props.maxValue} message={props.message}/>
            <div className={s.buttons}>
                {buttons.map(m => <Button key={m.id} title={m.name} callback={m.callback} status={m.status}/>)}
            </div>
        </div>
    )
}