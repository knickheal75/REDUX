import React,{ Component } from "react";
import { connect } from "react-redux";
import {selectBootcamper} from "../actions/index";
import {bindActionCreators} from "redux";

class BootcamperList extends Component{
    renderList(){
        return this.props.bootcampers.map((bootcamper) => {
            return(
                <li 
                key={bootcamper.name} 
                onClick={()=>this.props.selectBootcamper(bootcamper)}
                className="list-group-item">
                {bootcamper.name}
                </li>
            )
        })
    }
    render(){
        return(
            <ul className="list-group col-sm-4">
            {this.renderList()}
            </ul>
        )
    }

}

function mapStateToProps(state){
    return{
        bootcampers:state.bootcampers
    }
}

// Anything returned from this function will end up as props on Bootcamper list Container

function mapDispatchToProps(dispatch){  
    //whenever selectBootcamper is called the result should be passed to all our reducers
    return bindActionCreators({selectBootcamper:selectBootcamper},dispatch)
}

//promote bootcamperlist from a component to a container - it needs to know about the 
//new dispatch method ,selectBootcamper .make it available as a prop

export default connect(mapStateToProps,mapDispatchToProps)(BootcamperList)


