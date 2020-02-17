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

  componentDidUpdate = () => {
    axios.get('/api/inventory').then(res => { this.setState({ inventory: res.data }) })
  }

  handlePost = () => {
    axios.post('/api/product').then(res => { this.setState({ inventory: res.data }) })
  }

  handleEdit = (editId, obj) => {
    axios.put(`/api/inventory/${editId}`, obj)
  }


  render() {

    return (

      < div className='App'>
        <Header />
        <div className='spacing'>
          <Dashboard GetRequest={this.componentDidMount} Dashboard={this.state.inventory}
            HandleEdit={this.handleEdit} />
          <div className='formSpacing'> <Form GetRequest={this.componentDidMount} inventoryId={this.state.inventoryId} /></div>


        </div>

      </div >
    )
  }
}

export default App;
