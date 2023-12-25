import React from 'react'
import './qustionlist.css'
import {questionlist} from '../api/api'
import Accordion from '../accourdion/Accordion'


export default function Qustionlist() {
  return (
    <div className='accourdion'>
      <div className="main-div">
      <div className="headre">
        <h1>Reat Interview Questions</h1>
      </div>
      <div className="questionlist">
      {questionlist.map((e)=>{
        return(
          <>
            <Accordion id={e.id} {...e} key={e.id} />
          </>
        )
      })}
      </div>
      </div>
    </div>
  )
}
