import "bootstrap/dist/css/bootstrap.css"
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Cart from './Cart'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Products from "./components/Products"

const routing = (
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/cart" component={Cart} />
      <Route exact path="/products" component={Products} />
    </Router>
)

ReactDOM.render(
  routing, document.getElementById('root')
)