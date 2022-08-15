import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux/iceCream'


const NewIcecreamContainer = (props) => { 
    const [amount, setAmount] = useState(1)
  return (
    <div>
        <h4>Buy Ice Cream {amount}</h4>
        <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <button onClick={() => props.buyIceCream(amount)}>Buy{amount} icecream</button>
    </div>
  )
}

const mapStateToProps = (state) => {
    return{
        numOfIceCream: state.iceCream.numOfIceCream
    }
}


const mapDispatchToProps = (dispatch) => {
    return{
        buyIceCream: (amount) => dispatch(buyIceCream(amount))


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewIcecreamContainer)
