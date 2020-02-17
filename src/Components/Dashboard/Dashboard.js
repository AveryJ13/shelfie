import React, { Component } from 'react'
import Product from '../Product/Product'
import axios from 'axios'
import './Dashboard.css'


function Dashboard(props) {
    const deleteHandler = (id) => {
        axios.delete(`/api/inventory/${id}`)
        props.GetRequest()

    }

    const display = props.Dashboard.map(el => {
        return (
            <div className='alignBoxesCenter'>
                <div className='productBox'>
                    <div className='groupedText'>
                        <div className='productImage'><img src={el.img} className='imageSelf' /></div>
                        <div className='name' >Name: {el.name} </div>
                        <div className='price'>Price: ${el.price}</div>

                    </div>
                    <div className='buttons'>
                        <div className='editContainer'><Product id={el.id} deleteHandler={deleteHandler} Dashboard={props.Dashboard}
                            HandleEdit={props.HandleEdit} /></div>
                        <div className='deleteContainer'><button className='deleteButton' onClick={() => deleteHandler(el.id)}>Delete</button></div>
                    </div>
                </div>
            </div>
        )
    })



    return (
        <div>
            <h3>DASHBOARD</h3>
            {display}

        </div>
    )


}
export default Dashboard