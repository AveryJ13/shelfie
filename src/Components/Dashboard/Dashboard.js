import React, { Component } from 'react'
import Product from '../Product/Product'
import axios from 'axios'


function Dashboard(props) {
    const deleteHandler = (id) => {
        axios.delete(`/api/inventory/${id}`)
        props.GetRequest()

    }

    const display = props.Dashboard.map(el => {
        return (
            <div>
                Name: {el.name}
                Price: {el.price}
                Img: {el.img}
                <Product id={el.id} deleteHandler={deleteHandler} Dashboard={props.Dashboard}
                    HandleEdit={props.HandleEdit} />
                <button onClick={() => deleteHandler(el.id)}>Delete</button>
            </div>
        )
    })



    return (
        <div>
            Dashboard
                {display}

        </div>
    )


}
export default Dashboard