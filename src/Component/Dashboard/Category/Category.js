import '../DashboarLayout/Main/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import { MdFormatListBulletedAdd } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdUpdate } from "react-icons/md"
import { FaEye } from "react-icons/fa";
import { useEffect, useState } from "react"
import { addCategory, AggregateApi, CategoryApi, DeleteCategory, SearchCatApi } from "../../../API/api"


import { toast, ToastContainer } from "react-toastify"
// import { useNavigate } from "react-router-dom"

import { Table } from "react-bootstrap";
import { LOGO_URL } from '../../../URL/URL';
import CategorySubcat from './CategorySubcat';
import { Outlet } from 'react-router-dom';


export default function Category() {
  const [search , setSearch] = useState({catName:""}) // for search
  const [catDat, setCatData] = useState([]) // for get all category
  const [catShow, setCatShow] = useState(false)
  const [formShow , setFormShow]=useState(false)
  const [formDat, setFormData] = useState({
    catTitle: "",
    catName: ""
  })
  const [transfer, setTransfer] = useState() // fopr transer subcategory data to subategory part
  const [show, setShow] = useState(false)

  //all category api
  const CategoryApiCall = async () => {
    try {
      const res = await CategoryApi()
      if (res.status === 'success') {
        setCatData(res.data)
        // console.log(catDat)
      }
    } catch (err) {
      console.log(err)
    }
  }// all category api end

  //form handlind
  const handlleSubmit = async (event) => {
    event.preventDefault();
   try{
    const res = await addCategory(formDat)
   }catch(err){
    console.log(err)
   }
  }
  const handleChange = (event) => {
    setFormData({ ...formDat, [event.target.name]: event.target.value })
  }

  async function AggregateCall(id){
    //console.log(id)
   try{
    const res = await AggregateApi(id)
    setTransfer(res)
    if(id!==undefined || null){
      
    }
   }catch(err){
    console.log()
   }
  }
  //form handling end
  async function deleteApi(data) {
   try{
    const res = await DeleteCategory(data)
    // console.log("res", res)
    if (res.status === 'success') {
      toast(res.message)
    }
   }catch(err){
    console.log(err)
   }
  }

  //search category
   function seatrchChange(event){
    setSearch({...search,[event.target.name]:event.target.value})
  }
  async function searchApi(){
    try{
      // const res = await SearchCatApi({[event.target.name]:event.target.value})
    const res = await SearchCatApi(search)
    setSearch(res)
    // console.log(res)
    }catch(err){
      console.log(err)
    }
  }
  //cancel form
  function CancelForm(){
    setFormData(false)
    setFormShow(false)

  }
  // //search category end

  useEffect(() => {
    CategoryApiCall()
    searchApi()
  }, [])

  return (
    <>
      <div className="addsubcat">
        <h3>Categories</h3>
        <input type="input" placeholder="Search Category" autoComplete="off" name='catName' onChange={seatrchChange}></input>
        <button onClick={() => setCatShow(true)}>Add Category</button>
      </div>
  

      <div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>SR NO</th>
            <th style={{ fontWeight: "bold" }}>Category Name</th>
            <th style={{ fontWeight: "bold" }}>Category Title</th>
            <th style={{ fontWeight: "bold" }}>View</th>
            <th style={{ fontWeight: "bold" }}>Update</th>
            <th style={{ fontWeight: "bold" }}>Delete</th>
            <th style={{ fontWeight: "bold" }}>SubCategory</th>
          </tr>
        </thead>
        <tbody>
          {catDat?.map((e, pos) =>
            <tr key={pos} style={{ textAlign: "center" }} >
              <td>{pos + 1}</td>
              <td style={{ cursor: "pointer", margin: "5px" }}>{e.catName}</td>
              <td style={{ cursor: "pointer", margin: "5px" }}>{e.catTitle}</td>
              <td style={{ cursor: "pointer", margin: "5px", color: "#f7a01" }}><FaEye /></td>
              <td style={{ cursor: "pointer", margin: "5px", color: "green" }}><MdUpdate onClick={() => { }} /></td>
              <td style={{ cursor: "pointer", margin: "5px", color: "red" }}><RiDeleteBin6Line onClick={() => { deleteApi(e) }} /></td>
              <td style={{ cursor: "pointer", margin: "5px", color: "limegreen" }} onClick={()=>{AggregateCall(e._id) ;setFormShow(true)}}><MdFormatListBulletedAdd /></td>
            </tr>
          )}
        </tbody>
      </Table>
      <Modal show={formShow} onHide={CancelForm} className='model'>
                <Modal.Header closeButton>
                    <Modal.Title>Subcategory details</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                      <CategorySubcat data ={transfer}/>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
    </>
  )
}