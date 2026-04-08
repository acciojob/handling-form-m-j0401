
import React, { useState } from "react";

const Form=()=>{
    let[data,setData]=useState("");
    console.log(data)
    return (
        <div>
            <form>
            <input type="text"
             placeholder="enter text"
             value={data}
             onChange={(e)=>setData(e.target.value)}/>
             </form>
        </div>
    )
}

export default Form;