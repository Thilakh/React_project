import React from 'react'
import Top from './Top';
const Tickets = () => {
  return (
    <>
    <Top/>
    <div style={{display:"flex", justifyContent:"center", marginTop:"10%"}}>
        <table style={{border:"2px solid black", height:"400px", width:"1500px"}}>
            <th>
                sno
            </th>
            <th>
                From
            </th>
            <th>
                To
            </th>
            <th>
                Flights
            </th>
            <th>
                Date
            </th>
            <th>
                Boarding Time
            </th>
            <tr>
                <td>1</td>
                <td>Mumbai</td>
                <td>Chennai</td>
                <td>British Airways</td>
                <td>23/11/2023</td>
                <td>2.00pm</td>
            </tr>
            <hr></hr>
            <tr>
                <td>2</td>
                <td>srinivas</td>
                <td>sivaprakash</td>
                <td>thilak</td>
                <td>sanjay</td>
            </tr>
            <hr></hr>
            <tr>
                <td>3</td>
                <td>srinivas</td>
                <td>sivaprakash</td>
                <td>thilak</td>
                <td>sanjay</td>
            </tr>
        </table>
    </div>
    </>
  )
}

export default Tickets