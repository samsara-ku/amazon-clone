import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { sumBy } from 'lodash'
// import { getCartTotal } from './reducer'
import { useHistory } from 'react-router-dom'

function Subtotal() {
  const history = useHistory()
  const [{ cart }, dispatch] = useStateValue()

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of homework */}
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={sumBy(cart, 'price')}
        // value={getCartTotal(cart)} /* Using JS */
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button onClick={(e) => history.push('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
