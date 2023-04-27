import { createContext, useContext, useEffect, useState } from "react"

let Test = (props) => {

 return (
    <>
    <div>
      <h1>length - {props.data.length}</h1>
      {
        props.data.map(val => {
          return (
            <h1 key={val.id}>{val.id} - {val.name} <button onClick={() => props.ondel(val.id)}>del</button></h1>
          )
        })
      }
    </div>
    </>
  );
}



export default Test;