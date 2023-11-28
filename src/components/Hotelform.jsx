import React, { useRef }  from 'react'
import Top from './Top'
import { Input } from '@mui/material'
import { Button } from '../Components'

const Hotelform = () => {
    const inputRef = useRef();
    const handleButtonClick = () => {
        //inputRef.current.focus();
        alert("Form Submitted");
        //console.log(inputRef.current.value);
      };
  return (
    <>
    <Top/>
    <div>
        <center><h1>Hotel booking Form</h1></center>
        <center><form>
            <label>Name : <Input type="name" placeholder="Name" style={{ width:'200px'}}></Input></label>
            <br></br><br></br><br></br>
            <label>Email : <Input type="email" placeholder="something@gmai.com" style={{ width:'200px'}}></Input></label>
            <br></br><br></br><br></br>
            <label>Password : <Input type="password" placeholder='password' style={{ width:'200px'}}></Input></label>
            <br></br><br></br><br></br>
            <label>Phone Number : <Input type='text' placeholder='1234567890'></Input></label>
            <br></br><br></br><br></br>
            <Button onClick={handleButtonClick}>Submit</Button>
        </form></center>

    </div>
    </>
  )
}

export default Hotelform