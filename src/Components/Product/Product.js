import React, { Component } from 'react'
import Dashboard from '../Dashboard/Dashboard'

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input1: '',
            input2: '',
            input3: '',
            toggle: false
        }
    }

    toggleEdit = () => {
        this.setState({ toggle: !this.state.toggle })
    }

    handleChange1 = (e) => {
        this.setState({ input1: e })
    }

    handleChange2 = (e) => {
        this.setState({ input2: e })
    }

    handleChange3 = (e) => {
        this.setState({ input3: e })
    }

    render() {
        return (
            <div>
                {this.state.toggle ? (
                    <div>
                        <input placeHolder='new name' onChange={(e) => this.handleChange1(e.target.value)} />
                        <input placeHolder='new price' onChange={(e) => this.handleChange2(e.target.value)} />
                        <input placeHolder='new img' onChange={(e) => this.handleChange3(e.target.value)} />
                        <button onClick={() => {
                            this.toggleEdit()
                            this.props.HandleEdit()
                        }
                        }>Confirm</button>
                    </div>
                ) : (
                        <button onClick={() => { this.toggleEdit() }}>Edit</button>
                    )}

            </div>
        )
    }
}

export default Product