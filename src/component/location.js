import React from 'react'
import './location.css';
const Location = () => {
  return (
    <div className='LOCcontainer'>
        <h4 className='heading my-4'>
        <i className="fa-solid fa-location-dot me-2"></i>
        LOCATIONS</h4>
        <div className='d-flex flex-row mx-2 '>
            <p className='pickup'>Pick up location</p>
            <p className='loc ms-5 '>ISB</p>
        </div>
        <div className='d-flex flex-row mx-2'>
            <p className='pickup'>Places to visit &nbsp;&nbsp;</p>
            <p className='loc ms-5'><b>Naran</b>, <b>Babusar</b> top, <b>Hunza</b>,<b>attabad</b> lake,<br/><b>Khunjerab</b> pass and <b>Nalter</b> valley</p>
        </div>
    </div>
  )
}

export default Location