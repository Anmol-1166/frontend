import React, { useState } from 'react'
import smartphone from './dummyData'

const Productlist = () => {
    const brands=['Iphone 14','Samsung','OnePlus','g80']
    const [productData, setproductData] = useState(smartphone)
    const displayproducts=()=>{
        return productData.map((phone)=>{
            return  <div className=' col md-3'>
                <div className='card'>
                    <img style={{height:"200px",objectFit:'cover'}}className='card-img-top'src={phone.image}></img>
                    <div className='card-body'>
                        <h5>{phone.brand}</h5>
                        <h3>{phone.model}</h3>
                        <h2>{phone.price}</h2>
                    </div>
                </div>
            </div>
        })
    };
    const searchProduct=(e)=>{
        const search=e.target.value;
        setproductData(
            smartphone.filter((phone)=>{return phone.brand.toLowerCase().includes(search.toLowerCase())})
        )
    }
    const filterProduct=(e)=>{
        const search=e.target.value;
        setproductData(
            smartphone.filter((phone)=>{return phone.brand==search})
        )
    }
    return (
    <div className='list-back'>
        <header className='bg-body-secondary'>
            <div className='container py-5'>
                <h1 className='text-center fw-bolder'>PRODUCT LIST PAGE</h1>
                <input type='text' onChange={searchProduct} className='form-control form-control-lg' placeholder='search product list'/>
                <select onChange={filterProduct}>
                    {brands.map((brand)=>(
                        <option value={brand}>{brand}</option>
                    ))}
                </select>
            </div>
        </header>
        <div className='container-fluid'>
            <div className='row mt-4'>
                {displayproducts()}
            </div>
        </div>
    </div>
    )
}

export default Productlist