import React, { Component } from "react";
import { Route, HashRouter, NavLink } from 'react-router-dom'
import Execute from './Execute'
import Credit from './Credit'
import './styles/App.scss'

class App extends Component {


  render() {
    return (
      <HashRouter>
        <div className="mainContainer">
          <nav className="nav">
            <ul>
              <li><NavLink exact to="/">Расходы</NavLink></li>
              <li><NavLink to="/credit">Кредиты</NavLink></li>
            </ul>
          </nav>
          <div className="content">
            <Route exact path="/" component={Execute} />
            <Route path="/credit" component={Credit} />
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default App