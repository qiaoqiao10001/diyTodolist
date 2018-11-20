import {CHANGE_INPUT_VALUE,SUBMIT_VALUE} from './constants'
const defaultState = {
    input_value: 123,
    list:['vue','react']
}

export default (state=defaultState,action) => {
     const newState = JSON.parse(JSON.stringify(state));
     switch (action.type) {
         case CHANGE_INPUT_VALUE:
             newState.input_value = action.value;
             return newState;
         case SUBMIT_VALUE:
             newState.list.push(newState.input_value);
             newState.input_value = ''
             return newState;
         default:
             return state;  //默认的初始状态，一定不能去除
     }


}