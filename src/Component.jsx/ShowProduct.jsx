import React from 'react'

const ShowProduct = () => {
    let product=
    [
        {id:1,title:"iphone-12",price:100000},
        {id:2,title:"iphone-13",price:110000},
        {id:3,title:"iphone-14",price:120000},
        {id:4,title:"iphone-15",price:150000},
    ];

  return (
    <div>
        {product.map((data)=>(
        <div key={data.id}>
            <h1>title = {data.title}</h1>
            <h2>price = {data.price}</h2>
        </div>))}
        
        
    </div>
  )
}

export default ShowProduct