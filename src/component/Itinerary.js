import React from 'react'
import { useState } from 'react'
import "./Itinerary.css"
const Itinerary = () => {
  const [info,setinfo]=useState({
        time: "",
        location: ""
  })
  
  function send(time,location){
    const newVal={
      time:time,
      location:location
    }
  
    console.log(newVal)
    setinfo(newVal)
  }

  return (
    
    <div >

    <h6 className='heading my-4 ms-4'>
    <i className="fa-sharp fa-solid fa-calendar-days me-3"></i>  
    ITINERARY</h6>
    <div className='btns d-flex flex-row ms-4'>
    <button className='btndays btn btn-primary' onClick={send.bind(null,"9:00 AM","Hunza" )}>Day 1</button>
    <button className='btndays btn btn-primary' onClick={send.bind(null,"9:30","kashmir" )}>Day 2</button>
    <button className='btndays btn btn-primary' onClick={send.bind(null,"10:00","islamabad" )}>Day 3</button>
    <button className='btndays btn btn-primary' onClick={send.bind(null,"11:00","karachi" )}>Day 4</button> 
    <button className='btndays btn btn-primary' onClick={send.bind(null,"12:00","lahore" )}>Day 5</button>
    <button className='btndays btn btn-primary' onClick={send.bind(null,"13:00","faislabad" )}>Day 6</button>
    <button className='btndays btn btn-primary' onClick={send.bind(null,"14:00","sawat" )}>Day 7</button>
    <button className='btndays btn btn-primary' onClick={send.bind(null,"15:00","naran" )}>Day 8</button>
    </div>
    <div className='row my-5 '>
  
      {/* left side */}
      <div className=' col-lg-3 col-md-3 col-sm-3 col-4  circlerow d-flex flex-column '>
      <div className='circle'>  
      </div>
      <span className='time'>{info.time?info.time:null}</span>
      </div>
      {/* left side end */}

      {/* right side */}
      <div className=' col-lg-9 col-md-9 col-sm-9 col-8 texttt d-flex flex-column'>
        <h4 className='mainhead mt-3'>Drive to {info.location?info.location:null}</h4>
         
        <h6 className='hunzaHead'>
        <i className="fa-solid fa-location-dot icon me-2"></i>{info.location}</h6>
        <div>
        <ul className='list1'>
          <li>09:00 am departure from Islamabad to Hunza</li>
          <li>11:00 am reach Hunza</li>
          <li>01:00 pm reach Chillas</li>
          <li>03:00 pm Lunch</li>
          <li>05:00 pm reach Islamabad</li>
        </ul>
        </div>
      </div>
      {/* right side end */}
    </div>
</div>
  )
}

export default Itinerary