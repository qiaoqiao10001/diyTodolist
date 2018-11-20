import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as actionCreators  from './store/actionCreators'

class App extends Component{
    render(){
        const {input_value,changeInputValue,submitValue,list} = this.props
        console.log(this.props);
        return (
            <div>
                <div>
                    <input type="text" value={input_value} onChange={changeInputValue}/>
                    <button onClick={submitValue}>提交</button>
                </div>
                <ul>
                    {
                        list.map((item,idx) => {
                            return (<li key={idx}>{item}</li>)
                        })
                    }
                </ul>
            </div>)
    }
}

const mapState = (state) => ({
    input_value:state.input_value,
    list:state.list
})

const mapDispatch = (dispatch) => {
    return{
        changeInputValue(e) {
            const action = actionCreators.changeInputValue(e.target.value);
            dispatch(action);
        },
        submitValue(){

            const action = actionCreators.handleValue();
            dispatch(action)
        }
    }
}

export default connect(mapState,mapDispatch)(App)