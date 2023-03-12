// Write your JS code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

const crypoImage =
  'https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png'

class CryptocurrenciesList extends Component {
  state = {
    currencyList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptoCurrencyList()
  }

  getCryptoCurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const updatedData = data.map(eachItem => ({
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      usdValue: eachItem.usd_value,
    }))

    this.setState({
      currencyList: updatedData,
      isLoading: false,
    })
  }

  renderCryptoCurrencyList = () => {
    const {currencyList} = this.state

    return (
      <div className="content-container">
        <h1 className="main-heading">Cryptocurrency Tracker</h1>
        <img className="crypto-image" src={crypoImage} alt="cryptocurrency" />

        <ul className="currency-list-container">
          <li className="columns-title-container">
            <p className="titles-text">Coin Type</p>
            <div className="currency-type-container">
              <p className="titles-text usd-text">USD</p>
              <p className="titles-text">EURO</p>
            </div>
          </li>
          {currencyList.map(eachItem => (
            <CryptocurrencyItem currencyDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderCryptoCurrencyList()
        )}
      </>
    )
  }
}

export default CryptocurrenciesList
