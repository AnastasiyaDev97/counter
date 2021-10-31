let initialState = {
    count: 0,
    message: '',
    isSetActive: true,
    isIncActive: false,
    isResetActive: false,
    startValue: 0,
    maxValue: 6,
}

export type initialStateType = typeof initialState

export type generalActionType = incValueAT | toggleSetStatusAT | toggleIncStatusAT | toggleResetStatusAT
    | updateCountValueAT | updateMessageTextAT|updateMaxValueAT | updateStartValueAT |setStartValueFromLSAT

type incValueAT = ReturnType<typeof incValue>
type toggleSetStatusAT = ReturnType<typeof toggleSetStatus>
type toggleIncStatusAT = ReturnType<typeof toggleIncStatus>
type toggleResetStatusAT = ReturnType<typeof toggleResetStatus>
type updateCountValueAT = ReturnType<typeof updateCountValue>
type updateMessageTextAT = ReturnType<typeof updateMessageText>
type updateMaxValueAT = ReturnType<typeof updateMaxValue>
type updateStartValueAT = ReturnType<typeof updateStartValue>
type setStartValueFromLSAT = ReturnType<typeof setStartValueFromLS>



export const incValue = () => ({type: 'INC-VALUE'} as const)
export const toggleSetStatus = (status: boolean) => {
    return {
        type: 'TOGGLE-SET-STATUS' as const,
        status
    }
}
export const toggleIncStatus = (status: boolean) => {
    return {
        type: 'TOGGLE-INC-STATUS' as const,
        status
    }
}
export const toggleResetStatus = (status: boolean) => ({
    type: 'TOGGLE-RESET-STATUS',
    status
}) as const
export const updateCountValue = (value: number) => ({
    type: 'UPDATE-COUNTER-VAL',
    value,
}) as const
export const updateMessageText = (text: string) => ({
    type: 'UPDATE-MESS-TEXT',
    text,
}) as const
export const updateMaxValue = (value: number) => ({
    type: 'UPDATE-MAX-VAL',
    value,
}) as const
export const updateStartValue = (value: number) => ({
    type: 'UPDATE-START-VAL',
    value,
}) as const

export const setStartValueFromLS = (value: number) => ({
    type: 'SET-START-VAL',
    value,
}) as const

export const counterReducer = (state: initialStateType=initialState, action: generalActionType): initialStateType => {
    switch (action.type) {
        case "INC-VALUE":
            return {...state, count: state.count + 1};
        case 'TOGGLE-SET-STATUS':
            return {...state, isSetActive: action.status}
        case 'TOGGLE-INC-STATUS':
            return {...state, isIncActive: action.status}
        case 'TOGGLE-RESET-STATUS':
            return {...state, isResetActive: action.status}
        case "UPDATE-COUNTER-VAL":
            return {...state, count: action.value}
        case "UPDATE-MESS-TEXT":
            return {...state, message: action.text}
        case "UPDATE-MAX-VAL":
            return {...state, maxValue: action.value}
        case "UPDATE-START-VAL":
            return {...state, startValue: action.value}
        case "SET-START-VAL":
            return {...state,startValue: action.value}
        default:
            return state
    }
}

