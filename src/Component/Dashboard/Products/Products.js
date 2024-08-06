
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { TbListDetails } from "react-icons/tb";
import { Table } from "react-bootstrap";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdUpdate } from "react-icons/md"
import { useEffect, useState } from "react"
import AddProduct from "./AddProduct";
import Modal from 'react-bootstrap/Modal';
import { DeleteProductApi, GetAllProdectApi, GetAllProdectWithImageApi, SearchProductApi, updateProductApi } from "../../../API/api";
import UpdateProduct from './ProductUpdate';
import { Navigate, useNavigate } from 'react-router-dom';
import UplpadProductImage from './UploadImageProduct';
export default function Products(){
    const navigate = useNavigate()
    const [AddProducts, setAddProduct] = useState(false);
    const [UpdateData , setUpdateData] = useState(false)
    const [sendUpdate,setSendUpdate] = useState()
    const [allProducts, setAllProduct] = useState([])
    const [upload, setUpload] = useState(false)
    const [productId, setProductId] =useState()
    const [productImg , setProductImg] = useState()
    const [searchProducts, setSearchProducts] = useState({
      productName:""
    })
    async function ImageAPi(img_id) {
      const image = await GetAllProdectWithImageApi(img_id)
      // console.log("images",image)
      // setProductImg(image)
    }
    async function AllProducts(){
       try{
        const res = await GetAllProdectApi()
       
        setAllProduct(res)
       }catch(err){
        console.log(err)
       }
    }

    //delete product api //
      const DeleteProduct = async (id)=>{
        try{
          const res = await DeleteProductApi(id);
        if(res.status === "success"){
            toast.success(res.message)
        }
        }catch(err){console.log(err)}
         }
    //delete api end//

    //search Product api start//
       async  function searchHandle(event){
        try{
          const res = await SearchProductApi(event.target.value)
          console.log(res)
            // const res = await SearchProductApi({[event.target.name]:event.target.value})
            // console.log(res)
        }catch(err){
          console.log(err)
        }
    }
    //search product api end //
    function CancelForm() {
        setAddProduct(false)
        setUpdateData(false)
        setUpload(false)
    }
    
    useEffect(()=>{
        AllProducts()
        ImageAPi()
       
    },[])
    return (
     <>
        <div className="addsubcat">
                <h3>Products</h3>
                <input type="search" placeholder="Search Products" autoComplete="off" onChange={searchHandle} name='productName'></input>
                <button onClick={()=>navigate("/addproduct")}>Add Products</button>
        </div>
        
        <div className="productDiv">
            <Table striped bordered hover className='prductTable'>
      <thead>
        <tr style={{textAlign:"center"}}>
          <th style={{fontWeight:"bold", color:"#0ad6ad"}}>NO</th>
          <th style={{fontWeight:"bold",color:"#0ad6ad"}}>Name</th>
          <th style={{fontWeight:"bold",color:"#0ad6ad"}}>Price</th>
          <th style={{fontWeight:"bold",color:"#0ad6ad"}}>Title</th>
          <th style={{fontWeight:"bold",color:"#0ad6ad"}}>Currancy</th>
          <th style={{fontWeight:"bold",color:"#0ad6ad"}}>Unit</th>
          <th style={{fontWeight:"bold",color:"#0ad6ad"}}>Rating</th>
          <th style={{fontWeight:"bold",color:"#0ad6ad"}}>Stock</th>
          <th style={{fontWeight:"bold",color:"#0ad6ad"}}>Description</th>
          {/* <th style={{fontWeight:"bold",color:"#0ad6ad"}}>Image</th> */}
          <th style={{fontWeight:"bold",color:"#0ad6ad"}}>AddImage</th>
          <th style={{fontWeight:"bold",color:"#0ad6ad"}}>Update</th>
          <th style={{fontWeight:"bold",color:"#0ad6ad"}}>Delete</th>
          <th style={{fontWeight:"bold",color:"#0ad6ad"}}>Details</th>
        </tr>
      </thead>
      <tbody>
        {allProducts?.data?.map((e,pos)=>
       
          <tr key={pos} style={{textAlign:"center"}} >
            
            <td>{pos+1}</td>
             <td style={{cursor:"pointer",margin:"5px"}}>{e.productName}</td>
             <td style={{cursor:"pointer",margin:"5px"}}>{e.productPrice}</td>
             <td style={{cursor:"pointer",margin:"5px"}}>{e.productTitle}</td>
             <td style={{cursor:"pointer",margin:"5px"}}>{e.productCurrency}</td>
             <td style={{cursor:"pointer",margin:"5px"}}>{e.productUnit}</td>
             <td style={{cursor:"pointer",margin:"5px"}}>{e.productRating}</td>
             <td style={{cursor:"pointer",margin:"5px"}}>{e.productStock}</td>
             <td style={{cursor:"pointer",margin:"5px"}} >{e.productDescription}</td>
             {/* <td style={{cursor:"pointer",margin:"5px"}} >{ImageAPi(e._id)}</td> */}
             <td style={{cursor:"pointer",margin:"5px"}}><button className="imagebutton" onClick={()=>{setUpload(true);setProductId(e._id)}}>Add</button></td>
             <td style={{cursor:"pointer",margin:"5px"}}><button className="imagebutton" onClick={()=>{setUpdateData(true);setSendUpdate(e)}}>Update</button></td>
             <td style={{cursor:"pointer",margin:"5px"}}><button className="imagebutton" onClick={()=>DeleteProduct(e._id)}>Delete</button></td>
             <td style={{cursor:"pointer",margin:"5px"}}><button className="imagebutton" onClick={()=>navigate("./productDetails")}>Details</button></td>
             {/* <td style={{cursor:"pointer",margin:"5px"}}><MdUpdate  /></td> */}
             {/* <td style={{cursor:"pointer",margin:"5px"}}><RiDeleteBin6Line /></td> */}
             {/* <td style={{cursor:"pointer",margin:"5px"}}> <TbListDetails  /></td> */}
          </tr>
        )}
      </tbody>
    </Table>
    <ToastContainer />
        </div>
        {/* Add category Component */}
        <Modal show={AddProducts} onHide={CancelForm}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Products</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddProduct />
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        {/* details of products*/}
     

            <Modal show={UpdateData} onHide={CancelForm}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Products</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UpdateProduct Update={sendUpdate} />
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>

        {/* UploadproductImage Component */}
        <Modal show={upload} onHide={CancelForm}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Products</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UplpadProductImage id={productId} />
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
     
     

           
     </>
    )
 }


