import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import sampleAction from '../actions/sampleaction.js'

class ReduxTest extends React.Component{
    
    render(){
        return(
            <div>
            <h1 onClick={this.props.sampleAction}>The Componenet is working!</h1>
            {this.props.message}
            </div>
        );
    }
}

function setStatesToprops(state){
    
    return {message: state.data.message}
}

function setActionToProps(dispatch){
    return bindActionCreators({sampleAction: sampleAction},dispatch);
}

export default connect(setStatesToprops,setActionToProps)( ReduxTest);