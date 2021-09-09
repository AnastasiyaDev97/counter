import s from "./DisplayWithSettings.module.css";
import {InputsType} from "../App";

export type DisplayWithSettingsPropsType = {
    inputs: InputsType
    count: number | string
    maxValue: number
    startValue: number
}

export const DisplayWithSettings = (props: DisplayWithSettingsPropsType) => {

    return (
        <div className={s.tablo}>
            {props.inputs.map(m =>
                <div className={s.container}><span>{m.name}</span>
                    <div className={s.fieldWithInput}>
                        <input value={m.value}  className={props.startValue===props.maxValue?s.inputErr:m.clForInput}/>
                        <div className={s.up} onClick={()=>{m.upClickHandler()}}></div>
                        <div className={s.down} onClick={()=>m.downClickHandler()}></div>
                    </div>
                </div>
            )}
        </div>
    )
}