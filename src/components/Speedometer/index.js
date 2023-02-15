// Write your code here

import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onincreament = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  ondecreament = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="header">SPEEDOMETER</h1>

        <h1 className="speed-heading">Speed is {count}mph</h1>
        <img
          className="img-size"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <p className="text">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btn-element">
          <button className="speed-btn" onClick={this.onincreament}>
            Accelerate
          </button>
          <button className="break-btn" onClick={this.ondecreament}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
