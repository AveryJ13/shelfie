import React, { Component } from 'react'
import axios from 'axios'
import './Form.css'
class Form extends Component {
    constructor(props) {
        super()
        this.state = {
            name: '',
            price: 0,
            imgurl: '',
            input1: '',
            imput2: '',
            input3: ''
        }
    }

    handleInput1 = (val) => {
        this.setState({ input1: val })
    }

    handleInput2 = (val) => {
        this.setState({ input2: val })
    }

    handleInput3 = (val) => {
        this.setState({ input3: val })
    }

    resetInputs = () => {
        this.setState({
            input1: '',
            input2: '',
            input3: ''
        })
    }

    handleAdd = () => {

        axios.post('/api/product', {
            name: this.state.input1,
            price: this.state.input2,
            img: this.state.input3
        })
        this.props.GetRequest()
        this.resetInputs()


    }


    render() {
        console.log(this.state.input1)
        return (
            <div className='stick'>
                <div className='fullForm'>
                    <h3>FORM</h3>
                    <input className='inputStyle' value={this.state.input1} placeholder='name' onChange={(e) => { this.handleInput1(e.target.value) }} />
                    <input className='inputStyle' value={this.state.input2} placeholder='price' onChange={(e) => { this.handleInput2(e.target.value) }} />
                    <input className='inputStyle' value={this.state.input3} placeholder='img' onChange={(e) => { this.handleInput3(e.target.value) }} />
                    <div className='buttonContainer'>
                        <div><button className='button1' onClick={() => this.handleAdd()}>Add</button></div>
                        <div className='buttonSpacing'><button className='button2' onClick={() => this.resetInputs()}>Cancel</button></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form