import React, { useEffect,useState } from 'react'
import '../../index.css'
import { useLocation ,useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { keys } from '@mui/system';


const Updbtn = () => {

    const navigate = useNavigate();
    const [error,setError] = useState("");

    const location = useLocation();
    const { key, id } = location.state;

    // useEffect(() => {
    //     axios.get('http://localhost:8000/read/'+id)
    //     .then(res => {
    //         console.log(id);
    //         setvalues({...values, name: res.data[0].name, email: res.data[0].email,  phno: res.data[0].phno, dob: res.data[0].dob});    
    //         console.log(id);
    // })
    //     .catch(err => console.log(err));
    // }, [])

    const [values, setvalues] = useState({
        name: key.name,
        email: key.email,
        phno: key.phno,
        dob: key.dob
    })

const handleUpdate = (event) =>
{
    event.preventDefault();
    if (values.name === "") {setError("No Name is provided")} 
    if (values.phno.length !== 10) {setError("Invalid Number")}

    axios.put('http://localhost:8000/update/'+id,values)
    .then(res => {
        console.log(res)
        console.log(values)
        // navigate('/read')
    }).catch(err => console.log(err));
}
  return (

        <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center'>
        <div className='customDiv w-50 bg-white rounded p-3'>
        <form onSubmit={handleUpdate}>
            <h2>Update Student</h2>
            <div className='mb-2'>
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Enter Name' className= 'form-control' value={values.name}
                onChange = {e => setvalues({...values,name: e.target.value})}  />
            </div>
            <div className= 'mb-2'>
                <label htmlFor="">Email</label>
                <input type="email" placeholder= 'Enter Email' className=' form-control' value={values.email}
                onChange = {e => setvalues({...values,email: e.target.value})}  />
            </div>
            <div className= 'mb-2'>
                <label htmlFor="">Phone Number</label>
                <input type="number" placeholder= 'Enter Phone Number' className=' form-control' value={values.phno}
                onChange = {e => setvalues({...values,phno: e.target.value})}  />
            </div>
            <div className= 'mb-2'>
                <label htmlFor="">DOB</label>
                <input type="date" placeholder= 'Enter Date Of Birth' className=' form-control' value={values.dob}
                onChange = {e => setvalues({...values,dob: e.target.value})}  />
            </div>
                <button className='btn btn-success'>Update</button>
                {error}
            </form>
        </div>
        </div>
  )
}

export default Updbtn