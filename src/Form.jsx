import React, { useState } from 'react'

const Form = () => {
    const[Name,setName]=useState("")
    const[Email,setEmail]=useState("")
    const[Password,setPassword]=useState("");

    const handleSubmit =(e)=>{
        e.preventDefault();
        alert('your form has been submitted'+Name+"" +Email+"" +Password+"");
        
        setName("");
        setEmail("");
        setPassword("");
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div>
            Name:-{""}
             <input value={Name}
            onChange={(e)=>(setName(e.target.value))}
             type="text" />
        </div>
        <h3>{Name}</h3>
        <div>
            Email:-{""}
             <input value={Email}
            onChange={(e)=>(setEmail(e.target.value))}
            type="Email" />
        </div>
        <h4>{Email}</h4>
        <div>
            Password:- {""}
            <input value={Password}
            onChange={(e)=>(setPassword(e.target.value))} type="Password" />
        </div>
        <h4>{Password}</h4>
        <div>
            <button>Submit</button>
        </div>
        </form>
    </div>
  )
}

export default Form