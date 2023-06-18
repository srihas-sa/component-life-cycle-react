import {Component} from 'react'
import Clock from './components/Clock'
import './App.css'

class App extends Component {
  state = {isclocked: false}

  toggle = () => {
    this.setState(prevState => {
      const {isclocked} = prevState
      return {
        isclocked: !isclocked,
      }
    })
  }

  render() {
    const {isclocked} = this.state
    return (
      <div className="app-container">
        <button type="button" className="toggle-button" onClick={this.toggle}>
          {isclocked ? 'Hide-Button' : 'show-button'}
        </button>
        {isclocked && <Clock />}
      </div>
    )
  }
}

export default App
