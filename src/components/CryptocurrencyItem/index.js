// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = currencyDetails

  return (
    <li className="item-details-container">
      <div className="type-image-container">
        <img className="logo-style" src={currencyLogo} alt={currencyName} />
        <p className="name-style">{currencyName}</p>
      </div>
      <div className="currency-value-container">
        <p className="usd-value-text">{usdValue}</p>
        <p className="euro-value-text">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
