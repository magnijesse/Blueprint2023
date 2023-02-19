import React from "react";
import { useState, useEffect } from "react"
import { nanoid } from 'nanoid'

import { get, post } from "../../utilities";


const ClassSetup = (props) => {

    const [name, setName] = useState(" ")
    const [blockNumber, setBlockNumber] = useState(0)

    const handleSubmit = event => {
        event.preventDefault()

        post("/api/classes", { name: name, classid: nanoid(), blockNumber: blockNumber }).then((res) => {
            // alert("all set!")   
            console.log('res', res);
        });
            
    }

    return (
        <>
            <h1>Setup a new class!</h1>

            <form>
                <input 
                    type="text"
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                />
                <input 
                    type="number"
                    value={blockNumber}
                    onChange={(event) => {
                      setBlockNumber(event.target.value);
                    }}
                />        
                <button
                    onClick={handleSubmit}
                >Submit</button>   
            </form>
        </>
    )

}

export default ClassSetup