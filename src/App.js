import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {isShowClock: false}

  onTrigardeButton = () => {
    this.setState(prevState => ({
      isShowClock: !prevState.isShowClock,
    }))
  }
  render() {
    const {isShowClock} = this.state

    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.onTrigardeButton}
        >
          {isShowClock ? 'Hide Clock' : 'Show Clock'}
        </button>
        {isShowClock && <Clock />}
      </div>
    )
  }
}

export default App
