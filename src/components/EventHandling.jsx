import React from 'react'

const EventHandling = () => {
    return (
        <div className='container'>
            <h1 className='text-ceter'>Event Handling</h1>
            <hr />

            <h3>click event</h3>
            <button className='btn btn-danger mt-3' onClick={ () => {alert('button was clicked')}}>Click</button>

            <h3 className='mt-4'>Change event</h3>
            <input type="text" className='form-control' onChange={(e) => {console.log(e.target.value)}} />

            <input type="color" className='mt-3' onChange={(e) => {
                console.log(e.target.value);
                document.body.style.backgroundColor=e.target.value}}/>

            {/* <button className='btn btn-danger mt-3' onClick={ () => {
                document.body.style.backgroundColor='#000000'}}>night mode</button> */}

            <input type="file" className='form-control' multiple onChange={(e) => console.log(e.target.files)} />


        </div>
    )
}

export default EventHandling