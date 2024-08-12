import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props) 
    this.state =  { date : new Date() }
  }
  componentDidMount() {
    this.TimeId = setInterval(this.Tick,1000)
  }
  componentWillUnMount() {
    clearInterval(this.TimeId)
    
  }
  Tick=()=> {
    this.setState({
      date: new Date()
    })
  }
  render() {
    const {date} = this.state
    console.log(date)
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
