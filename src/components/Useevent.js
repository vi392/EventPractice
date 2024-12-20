
import React from 'react'

function Useevent() { 

    function hendleClick() {

        alert("I am Clicked")
    } 

    function hendleMouseover() {

        alert("A 1st Para is over using Mouse")
    } 

    function hendleChange(e) {

        // console.log("Input m chage hui") 

        console.log("value till now : ", e.target.value)
    }

  return (
    <div>

        <p onMouseOver={hendleMouseover} style={{border : "1px solid black" }}>
            I am 1st Para
        </p>
      <button onClick= {hendleClick}>
        Click Me
      </button>

      <form>
      <input type='text' onChange={hendleChange}></input>
      </form>
    </div>
  )
}

export default Useevent
