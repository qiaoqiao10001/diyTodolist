import * as constants from './constants'
export const changeInputValue = (value) => ({
    type:constants.CHANGE_INPUT_VALUE,
    value
})
export const handleValue = () => ({
    type:constants.SUBMIT_VALUE
})