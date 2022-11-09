// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  randomNumGenerator = () => Math.ceil(Math.random() * 100)

  onIncrease = () => {
    const randomNumber = this.randomNumGenerator()
    this.setState(prevstate => ({
      count: prevstate.count + randomNumber,
    }))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="counter">Count {count}</h1>
          <p className="desc">Count is {displayText}</p>
          <div>
            <button className="btn" type="button" onClick={this.onIncrease}>
              Increment
            </button>
          </div>
          <p className="mis-desc">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
