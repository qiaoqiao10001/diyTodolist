import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as actionCreators  from './store/actionCreators'

class App extends Component{
    render(){
        const {input_value,changeInputValue} = this.props
        console.log(this.props);
        return (
            <div>
                <div>
                    <input type="text" value={input_value} onChange={changeInputValue}/>
                    <button>提交</button>
                </div>
                <ul>
                    <li>reactnative</li>
                </ul>
            </div>)
    }
}

const mapState = (state) => ({
    input_value:state.input_value
})

const mapDispatch = (dispatch) => {
    return{
        changeInputValue(e) {
            const action = actionCreators.changeInputValue(e.target.value);
            dispatch(action);
        }
    }
}

export default connect(mapState,mapDispatch)(App)