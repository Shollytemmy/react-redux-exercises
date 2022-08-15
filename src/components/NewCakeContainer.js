
import React, {useState} from 'react'
import { cakeAction } from '../redux'
import { connect } from 'react-redux'
 const NewCakeContainer = (props) => {
 const  [amount, setAmount] = useState()
  return (
    <div>
        <h3>Num of cakes {props.numOfCake}</h3>
        <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <button onClick={()=> props.buyCake(amount) }>Buy cakes</button>
    </div>
  )
}



const mapStateToProps= (state) => {

    return{
        numOfCake: state.numOfCake
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        buyCake: (amount) => dispatch(cakeAction(amount))

    }
}

//numOfCake: state.cake.numOfCake


export default connect(mapStateToProps, mapDispatchToProps) (NewCakeContainer)
