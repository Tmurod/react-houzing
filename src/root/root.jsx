import { useState } from "react";
import Test from "../components/test";
import Text from "../components/text";

let Root = () => {
  let [data, setData] = useState([
    {id:1, name: "ermat", year: 2000},
    {id:2, name: "tmurod", year: 1995},
    {id:3, name: "dilmurod", year: 1999},
    {id:4, name: "soft", year: 2004},
  ]);
  
  let del = (id) => {
    let res = data.filter(val => val.id !== id);
    setData(res)
   }
   
  return (
    <div>
      <Text data={data}></Text>
      <Test data={data} ondel={del}></Test>
    </div>
  );
}

export default Root;