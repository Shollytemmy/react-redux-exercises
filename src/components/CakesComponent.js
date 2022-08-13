import React from 'react'

import { cakeAction } from '../redux'
import { connect } from 'react-redux'

 const CakesComponent = (props) => {
   
  return (
    <div>
        <h2>{props.numOfCake}</h2>
        <button onClick={props.buyCake}>Buy cakes</button>
    </div>
  )
}


const mapStateToProps = state => {
    return{
        numOfCake: state.numOfCake
    }
}

const mapDispatchToProps = dispatch => {
    return{
        buyCake: () => dispatch(cakeAction())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakesComponent)



