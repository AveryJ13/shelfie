import React, { Component } from 'react';
import axios from 'axios'

import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inventory: [],
      inventoryId: []
    }
  }

  componentDidMount = () => {
    axios.get('/api/inventory').then(res => { this.setState({ inventory: res.data }) })
  }

  handlePost = () => {
    axios.post('/api/product').then(res => { this.setState({ inventory: res.data }) })
  }

  handleEdit = (editId) => {
    this.setState({ inventoryId: editId })
  }

  render() {

    return (

      < div >
        <Dashboard GetRequest={this.componentDidMount} Dashboard={this.state.inventory}
          HandleEdit={this.handleEdit} />
        <Form GetRequest={this.componentDidMount} inventoryId={this.state.inventoryId} />
        <Header />
      </div >
    )
  }
}

export default App;
