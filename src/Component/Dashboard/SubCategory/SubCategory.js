import 'bootstrap/dist/css/bootstrap.min.css'
import { MdDelete } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import Modal from 'react-bootstrap/Modal';
import {  useState } from "react"
import { DeleteSubcategory, SubCategoryApi } from "../../../API/api"
import AddSubcategory from "./AddSubcategory";
import UpdateSubcategory from './UpdateSubcategory';
import { toast, ToastContainer } from 'react-toastify';

import { Table } from "react-bootstrap";
export default function SubCategory() {
    
    const [subCat, setSubCat] = useState([]);
    const [select, setSelect] = useState();
    const [formShow, setFormShow] = useState(false)
    const [updateShow, setUpdateShow] = useState(false);
    const [updateData ,setUpdateData] =useState()
    // const categoryApicall = async () => {
    //     const res = await CategoryApi()
    //     setCategory(res)
    // }
    const apiCaaling = async () => {
        try{
            const res = await SubCategoryApi()
        if (res.status === 'success') {
            setSubCat(res)
        }
        }catch(err){
            console.log(err)
        }
    }
    function CancelForm() {
        setFormShow(false)
    }
    function UpdateCancel(){
        setUpdateShow(false)
    }
    async function deleteApi (data){
        const res = await DeleteSubcategory(data)
        toast(res.message)
    }
    useState(() => {
        
        apiCaaling()
    }, [])
    return (
        <>
            <div className="addsubcat">
                <h3>SubCategories</h3>
                <input type="search" placeholder="Search SubCategory" autoComplete="off"></input>
                <button onClick={() => { setFormShow(true) }}>Add SubCategory</button>
                
            </div>

            <div className="subcatTable">   
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Sr No</th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Update</th>
                            <th>Delete</th>

                        </tr>
                        {subCat.data?.map((e, pos) =>
                            <tr key={pos}>
                                <td>{pos + 1}</td>
                                <td style={{textAlign:"center"}}>{e.subCatName}</td>
                                <td>{e.subCatTitle}</td>
                                <td style={{padding:"8px",textAlign:"center",}}><GiAutoRepair onClick={()=>{setUpdateShow(true);setUpdateData(e)}} style={{cursor:"pointer",fontSize:"20px",verticalAlign:"middle",color:"skyblue"}} /></td>

                                <td><MdDelete onClick={()=>{deleteApi(e)}} style={{cursor:"pointer",fontSize:"20px",verticalAlign:"middle",color:"red"}}/></td>
                            </tr>)}
                    </thead>
                </Table>
            </div>

                
            {/* Add subcategory Component */}
            <Modal show={formShow} onHide={CancelForm}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Subcategory</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <AddSubcategory catId={select} />
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>


            {/* Update csubcategory here... */}
            <Modal show={updateShow} onHide={UpdateCancel}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Subcategory</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <UpdateSubcategory Update={updateData} />
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>

            <ToastContainer />
        </>
    )
}