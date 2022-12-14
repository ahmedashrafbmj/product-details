import React, { useState } from 'react';
import './pageinfo.css';
// import Extras from './extras';
// import Location from './location';
// import Duration from './Duration';
// import Itinerary from './Itinerary';

function Pagetop() {
    const[select,setselect]= useState('./images/p1.jpg')
    const[value,setValue]= useState(60000)
    return (
    <div>
        <div className="container-lg">
  <div className="row">
    {/* left part */}
    <div className="col-xl-6 col-md-7  d-flex flex-column flex-sm-row align-items-center imagediv">

        <div className='bigimg mx-4 my-4'>
            <img src={select} alt='selected' className='selected'/>
        </div>
        <div className='imgcontainer  d-flex flex-row   flex-sm-column mx-1' style={{gap:"10px"}}>
        <img src='./images/p1.jpg'  alt='' onClick={()=>(setselect('./images/p1.jpg'))}  className='selected my-1'/>
        <img src='./images/p2.jpg' alt='' onClick={()=>(setselect('./images/p2.jpg'))}className='selected my-1'/>
        <img src='./images/pp3.jpg' alt='' onClick={()=>(setselect('./images/pp3.jpg'))} className='selected my-1'/>
        </div>
    </div>
    {/* right part */}
    <div className="col-xl-6 col-md-5  textdiv">
        <div >
        <h4 className='top-heading mx-1'><b>HUNZA 10 DAYS PACKAGE</b></h4>
       <p className='paratext mx-1 '>overview</p>
       <p className='discription mx-1'>We'll take you <b>Naran</b>, <b>Babusar</b> top, <b>Hunza</b>,<br/> <b>attabad</b> lake, <b>Khunjerab</b> pass and <b>Nalter</b> valley</p>

        </div>

       <div   className="inputGroup mx-auto"> 
        <span className="increment">
            <i className="fa-solid fa-plus" onClick={()=>(setValue(value+5000))}></i>
        </span>
        <span className="coins ms-2 me-2">
        <i className="fa-solid fa-coins"></i>
        </span>
        
        <input style={{maxWidth:"120px" ,fontWeight:"bold"}} type="number"  value={`${value}`}   onChange={(e)=>(setValue(+(e.target.value)))} />
        <span style={{maxWidth:"120px" ,fontWeight:"bold",color:"#565553"}} className="pkr me-2 ms-1" >
        pkr    
        </span>
        <span className='decrement ms-3'>
            <i className="fa-solid fa-minus" onClick={()=>(setValue(value-5000))}></i>
        </span>
    </div>
    <div className='bit'>
    <button className=" bitbtn my-3">Bid</button>
    </div>
    </div>
  </div>
  {/* <div className="row divv">
  
    <div className='col-md-3 my-3 mx-3 ' > 
     
       <div style={{columnGap:"10px"}} className="nav flex-row flex-md-column   nav-pills me-3 justify-content-center justify-content-md-start" id="v-pills-tab" role="tablist" aria-orientation="vertical">
         <button className="nav-link active btn my-1" id="v-pills-location-tab" data-bs-toggle="pill" data-bs-target="#v-pills-location" type="button" role="tab" aria-controls="v-pills-location" aria-selected="true" >LOCATIONS</button>
         <button className="nav-link btn my-1" id="v-pills-duration-tab" data-bs-toggle="pill" data-bs-target="#v-pills-duration" type="button" role="tab" aria-controls="v-pills-duration" aria-selected="false">DURATION</button>
        <button className="nav-link btn my-1" id="v-pills-itinerary-tab" data-bs-toggle="pill" data-bs-target="#v-pills-itinerary" type="button" role="tab" aria-controls="v-pills-itinerary" aria-selected="false">ITINERARY</button>
         <button className="nav-link btn my-1" id="v-pills-extras-tab" data-bs-toggle="pill" data-bs-target="#v-pills-extras" type="button" role="tab" aria-controls="v-pills-extras" aria-selected="false">EXTRAS</button>
         <button className="nav-link btn my-1" id="v-pills-requirment-tab" data-bs-toggle="pill" data-bs-target="#v-pills-requirment" type="button" role="tab" aria-controls="v-pills-requirment" aria-selected="false">REQUIRMENTS</button>
         <button className="nav-link btn my-1" id="v-pills-recomandation-tab" data-bs-toggle="pill" data-bs-target="#v-pills-recomandation" type="button" role="tab" aria-controls="v-pills-recomandation" aria-selected="false">RECOMANDATION</button>
       </div>
       </div>      
    <div className='col-md-8 tabss my-3'> 
       <div className="tab-content tabcontainer mx-3 my-3" id="v-pills-tabContent">
         <div className="tab-pane fade show active" id="v-pills-location" role="tabpanel" aria-labelledby="v-pills-location-tab"><Location/></div>
         <div className="tab-pane fade" id="v-pills-duration" role="tabpanel" aria-labelledby="v-pills-duration-tab"><Duration/></div>
         <div className="tab-pane fade" id="v-pills-itinerary" role="tabpanel" aria-labelledby="v-pills-itinerary-tab"><Itinerary/></div>
         <div className="tab-pane fade" id="v-pills-extras" role="tabpanel" aria-labelledby="v-pills-extras-tab"><Extras/></div>
         <div className="tab-pane fade" id="v-pills-requirment" role="tabpanel" aria-labelledby="v-pills-requirment-tab">REQUIRMENTS</div>
         <div className="tab-pane fade mx-5 my-3" id="v-pills-recomandation" role="tabpanel" aria-labelledby="v-pills-recomandation-tab">
            <h4 className='heading'>+ RECOMANDATIONS</h4>
            <h6 className='para'>This order is mandatory, No order will be processed without this:</h6>
            <h6>
            <ul className='list'>
            <li >Day bag/Rucksack</li>
            <li >Trekking boots or joggers</li>
            <li >Warm jacket and trausers</li>
            <li >Rain Coat</li>
            <li >Warm socks</li>
            </ul>
            </h6>
         </div>
       </div>
       </div>
     </div> */}

  </div>
  </div>
    
   
  )
}

export default Pagetop