import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBagShopping} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import './ApiFakestore.css'


const ApiFakestore = () => {
    const [productos, setProductos] = useState([]);

    const fetchProductos = async () =>{
        const response = await axios.get('https://fakestoreapi.com/products')
        setProductos(response.data)
    }

    useEffect(()=>{
        fetchProductos()
    }, [])
  return (
    <div className='conteiner-padre'>
        {/* <div className='container-productos'> */}
            {productos.map((producto)=>(
                <div key={producto.id} className='item-producto'>
                    <FontAwesomeIcon icon={faBagShopping} className='icon'/>
                    <h2 className='title'>{producto.title}</h2>
                    <img src={producto.image} alt="" />
                    <p>{producto.description}</p>
                    <h2>Category: ${producto.category}</h2>
                    <h2>Price: ${producto.price}</h2>
                </div>
            ))}
        {/* </div> */}
    </div>
  )
}

export default ApiFakestore