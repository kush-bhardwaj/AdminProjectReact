import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react"
import Modal from 'react-bootstrap/Modal';
import { Table } from "react-bootstrap";
export  default function AddSubInCat(props){
    
    const [data , setData] = useState()
    useEffect(()=>{
        setData(props.sent?.aggregateData[0].sucatdata)
    },[props])
    // console.log("inside data" , data)

    return(
        <>
            <div  className="div">
       <Table striped bordered hover className="subtable">
        <thead>
          <tr style={{ textAlign: "center" }}>
           
            <th>SR NO</th>
            <th style={{ fontWeight: "bold" }}>ID</th>
            <th style={{ fontWeight: "bold" }}>Name</th>
            <th style={{ fontWeight: "bold" }}>Title</th>
            
          </tr>
        </thead>
        <tbody>
          {data?.map((e, pos) =>
         
            <tr key={pos} style={{ textAlign: "center" }} >
              <td>{pos + 1}</td>
              <td style={{ cursor: "pointer", margin: "5px" }}>{e._id}</td>
              <td style={{ cursor: "pointer", margin: "5px" }}>{e.subsubcatname}</td>
              <td style={{ cursor: "pointer", margin: "5px" }}>{e.subsubcattitle}</td>
             
            </tr>
          )
          }
        </tbody>
      </Table>
       </div>
        </>
    )
}