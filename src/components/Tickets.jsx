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
                <td>Indigo</td>
                <td>23/11/2023</td>
                <td>14:00</td>
            </tr>
            <hr></hr>
            <tr>
            <td>2</td>
                <td>Mumbai</td>
                <td>Chennai</td>
                <td>Air Asia</td>
                <td>23/11/2023</td>
                <td>15:35</td>
            </tr>
            <hr></hr>
            <tr>
            <td>3</td>
                <td>Mumbai</td>
                <td>Chennai</td>
                <td>Spicejet</td>
                <td>23/11/2023</td>
                <td>20:00</td>
            </tr>
        </table>
    </div>
    </>
  )
}

export default Tickets