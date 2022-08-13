import React from 'react'
import { buyIceCream } from '../redux/iceCream'
import { connect } from 'react-redux'

 const IceCreamComponent = (props) => {
  return (
    <div>
        <h2>No of ice cream -{props.numOfIceCream} </h2>
        <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  )
}

const mapStateToProps = state => {
    return{
        numOfIceCream: state.iceCream.numOfIceCream
    }
}

const mapDispatchToProps = dispatch => {
    return{
        buyIceCream: () => dispatch(buyIceCream())

    }
}


export default connect(mapStateToProps, mapDispatchToProps)
 (IceCreamComponent)