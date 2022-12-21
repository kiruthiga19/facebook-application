import React from 'react'
import './Navbar.css'

function Body() {
  return (
    <div>
        <div className='row justify-content-center'>
            <div className='col-md-6'>
                <h1 className='heading'>conect with your friends</h1>
            </div>
            <div className='col-md-4'>
                <h1>REGISTER</h1>
                <form action=''>
                    <input type='text' className='form-control' placeholder='name'></input>
                    <input type='text' className='form-control' placeholder='USERNAME'></input>
                    <input type='text' className='form-control' placeholder='PASSWORD'></input>
                    <input type='submit' className='btn btn-primary' value='SIGN UP'></input>
                   
                </form>
            </div>
        </div>
    </div>


  )
}

export default Body