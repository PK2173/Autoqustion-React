import React, { useState } from 'react'

function Accordion(props) {
    const [Show, setShow] = useState(false)
  return (
    <div className='maindivacc'>
        <div className="Accheader">
            <p className="queslogo" onClick={()=>{setShow(!Show)}}>{Show ? <>➖</> : <>➕</>}</p>
            <h3>{props.question}</h3>
        </div>
        {Show && 
        <div className="Accheader answear">
            <h5>{props.answear}</h5>
        </div>}
    </div>
  )
}

export default Accordion