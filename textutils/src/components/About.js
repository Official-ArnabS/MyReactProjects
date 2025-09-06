import React, { useState } from 'react'

export default function About(props) {

/* const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  })
*/
 let myStyle = {
    color: props.mode==='dark'?'white':'rgb(36 74 104)',
    backgroundColor: props.mode==='dark'?'rgb(36 74 104)':'white',
    boder: '2px solid',
    borderColor: props.mode==='dark'?'white':'rgb(36 74 104)',
 } 
    
// const [btnText, setBtnText]=useState("Enable Dark Mode")

/* const changeMyStyle =()=>{
    if(myStyle.backgroundColor==='black'){
        setMyStyle({
        color: 'black',
        backgroundColor: 'white'
    })
    setBtnText("Enable Dark Mode")
    }
    else{
        setMyStyle({
        color: 'white',
        backgroundColor: 'black'
    })
    setBtnText("Enable Light Mode")    
    }
    

  }*/

  return (
    <div className='container'>
        <h1 className="my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>About Us</h1>
          <div className="accordion" id="accordionExample">
              <div className="accordion-item" style={myStyle}>
                  <h2 className="accordion-header">
                      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          <strong>Analyze your text</strong>
                      </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                          Lauren ipsum 1
                          </div>
                  </div>
              </div>
              <div className="accordion-item" style={myStyle}>
                  <h2 className="accordion-header">
                      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          <strong>Free to use</strong>
                      </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                          Lauren ipsum 2
                          </div>
                  </div>
              </div>
              <div className="accordion-item" style={myStyle}>
                  <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          <strong>Browser compatible</strong>
                      </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                         Lauren ipsum 3
                         </div>
                  </div>
              </div>
          </div>
        {/*  <div className="container my-3">
            <button type="button" className="btn btn-primary" onClick={changeMyStyle}>{btnText}</button>
          </div>
        */}  
          
</div>
  )
}
