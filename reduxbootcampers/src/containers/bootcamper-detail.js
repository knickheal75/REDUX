import React,{Component} from "react";
import { connect } from "react-redux";

class BootcamperDetail extends Component{
    render(){
        if(!this.props.bootcamper){
            return<div>
                 select a bootcamper to get started
            </div>
        }
        return(
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.bootcamper.name}</div>
                <div>City: {this.props.bootcamper.city}</div>
                <div>Age: {this.props.bootcamper.age}</div>

            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        bootcamper:state.activeBootcamper
    }
}

export default connect(mapStateToProps)(BootcamperDetail)