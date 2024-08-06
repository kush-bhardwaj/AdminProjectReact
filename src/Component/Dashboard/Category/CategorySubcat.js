import "./category.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import { FaAddressCard } from "react-icons/fa";
import { BiAddToQueue } from "react-icons/bi";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { SubcategoryAggregate } from "../../../API/api";
import AddSubInCat from "./AddSubInCat";
export default function CategorySubcat(props){  
  console.log("props",props)
  const [ data , setData] =  useState();
  const [ show ,setShow] = useState()
  const [subData , setSubData] = useState() //subsubcat data
  const [addsubincat , setAddSubInCat] = useState() // for get subsubcategroy inside  subcategopry data
  useEffect(()=>{
    setData(props.data?.catAggregateData[0].subCatData)
  },[props]);
  async function SubAggregate(id){
   try{
    const res =await SubcategoryAggregate(id)
    console.log("res",res)
    setAddSubInCat(res)
   }catch(err){console.log(err)}

  }
  function CancelForm(){
  setShow(false)
  }
    return(<>
       <div  className="div">
       <Table striped bordered hover className="subtable">
        <thead>
          <tr style={{ textAlign: "center" }}>
           
            <th>SR NO</th>
            <th style={{ fontWeight: "bold" }}>SubCategory ID</th>
            <th style={{ fontWeight: "bold" }}>SubCategory Name</th>
            <th style={{ fontWeight: "bold" }}>SubCategory Title</th>
            <th style={{ fontWeight: "bold" }}>Get Details</th>
            <th style={{ fontWeight: "bold" }}>Add</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((e, pos) =>
         
            <tr key={pos} style={{ textAlign: "center" }} >
              <td>{pos + 1}</td>
              <td style={{ cursor: "pointer", margin: "5px" }}>{e._id}</td>
              <td style={{ cursor: "pointer", margin: "5px" }}>{e.subCatName}</td>
              <td style={{ cursor: "pointer", margin: "5px" }}>{e.subCatTitle}</td>
              <td style={{ cursor: "pointer", margin: "5px",color:"green" }} onClick={()=>{SubAggregate(e._id);setShow(true)}}> <FaAddressCard /></td>
              <td style={{ cursor: "pointer", margin: "5px",color:"orange" }} ><BiAddToQueue /></td>
            </tr>
          )
          }
        </tbody>
      </Table>
       </div>

         {/* addsubincat*/}
          
      <Modal show={show} onHide={CancelForm} className='model'>
                <Modal.Header closeButton>
                    <Modal.Title>details</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                      <AddSubInCat sent ={addsubincat} />
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
    </>)
}