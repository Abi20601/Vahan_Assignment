import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from 'react-router-dom';
import '../../index.css'

function Create () { 
    const [values, setvalues] = useState({
        name:'',
        email: '',
        phno: '',
        dob: ''
    })

    const navigate = useNavigate();

    const handleSubmit = (x) => {
        x.preventDefault();
        axios.post('http://localhost:8000/users',values)
        .then(res => {
            console.log(res);
            navigate('/read')
        })
        .catch(err => console.log(err));
    }
    return (
        <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center'>
        <div className='customDiv w-50 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
            <h2>Add Student</h2>
            <div className='mb-2'>
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Enter Name' className= 'form-control'
                onChange = {e => setvalues({...values,name: e.target.value})}  />
            </div>
            <div className= 'mb-2'>
                <label htmlFor="">Email</label>
                <input type="email" placeholder= 'Enter Email' className=' form-control' 
                onChange = {e => setvalues({...values,email: e.target.value})}  />
            </div>
            <div className= 'mb-2'>
                <label htmlFor="">Phone Number</label>
                <input type="number" placeholder= 'Enter Phone Number' className=' form-control' 
                onChange = {e => setvalues({...values,phno: e.target.value})}  />
            </div>
            <div className= 'mb-2'>
                <label htmlFor="">DOB</label>
                <input type="date" placeholder= 'Enter Date Of Birth' className=' form-control'
                onChange = {e => setvalues({...values,dob: e.target.value})}  />
            </div>
                <button className='btn btn-success'>Submit</button>
            </form>
        </div>
        </div>
)
}

export default Create