import {CHANGE_INPUT_VALUE} from './constants'
const defaultState = {
    input_value: 123
}

export default (state=defaultState,action) => {
     if(action.type=== CHANGE_INPUT_VALUE){
         const newState = JSON.parse(JSON.stringify(state));
         newState.input_value = action.value;
         return newState;
     }
     return state;  //默认的初始状态，一定不能去除
}