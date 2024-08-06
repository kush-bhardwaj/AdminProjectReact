import { API_BASE_URL } from "../URL/URL"
import { API_ROUTER } from "../UTILS/ApiRouter"
import { getStorage } from "../UTILS/Storage"

export const SignupApi = async (signupData) => {
    try {
        const header = {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(signupData)
        }
        const res = await fetch(`${API_BASE_URL}${API_ROUTER.auth.signup}`, header)
        const resData = res.json()
        return resData;
    } catch (err) {
        console.log(err)
    }
}

//loging api

export const LoginApi = async (loginData) => {
    try {
        const header = {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(loginData)
        }
        const res = await fetch(`${API_BASE_URL}${API_ROUTER.auth.login}`, header)
        const resData = await res.json()
        return resData;
    } catch (err) {
        console.log(err)
    }
}

//get categor api
export const addCategory = async (data) => {
    try {
        const header = {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data)
        }
        const resData = await fetch(`${API_BASE_URL}${API_ROUTER.category.addcategory}`, header);
        const resObjData = await resData.json()
        return resObjData

    } catch (err) {
        console.log(err)
    }
}
//category api
export const CategoryApi = async () => {
    try {
        const header = {
            method: "GET",
            headers: { 
                "Content-type": "application/json",
               "Authorization":`Bearer ${getStorage().data.token}`
             }
        }
        const resData = await fetch(`${API_BASE_URL}${API_ROUTER.category.getallcategory}`, header)
        const resObjData = await resData.json()
        return resObjData
    } catch (err) { console.log(err) }
}
//delete category
export const DeleteCategory = async (data) => {
    console.log("api id", data._id)
    try {
        const header = {
            method: "Delete",
            headers: { "Content-type": "application/json","Authorization":`Bearer ${getStorage().data.token}` },
            //here will body if have
        }
        const delteRes = await fetch(`${API_BASE_URL}${API_ROUTER.category.deletecategory}/${data._id}`, header)
        const resData = await delteRes.json()
        return resData
    } catch (err) {
        console.log(err)
    }
}

//deltee category end
//search categoryn api start
export const SearchCatApi = async (searchData) => {
    try {
        const header = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization":`Bearer ${getStorage().data.token}`
            },
            body: JSON.stringify(searchData)
        }
        const res = await fetch(`${API_BASE_URL}${API_ROUTER.category.search}/${searchData}`, header)
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}
//search categoryn api end
// category aggregate api
export const AggregateApi = async (id) => {
    console.log("id",id)
    try {
        const header = {
            method: "POST",
            headers: { "Content-type": "application/json",
                "Authorization":`Bearer ${getStorage().data.token}`
             }
        }
        const resData = await fetch(`${API_BASE_URL}${API_ROUTER.category.aggregate}/${id}`, header)
        const res = await resData.json()
        return res;
    } catch (err) {
        console.log(err)
    }
}
//category aggregate end

//single category
export const SingleCatApi = async (id) => {
    try{
        console.log(id)
    const header = {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            "Authorization":`Bearer ${getStorage().data.token}`
        }
    }
    const res = await fetch(`${API_BASE_URL}${API_ROUTER.category.singlecategory}/${id}`, header)
    return res.json()
    }catch(err){
        console.log(err)
    }
}
//category api end.....

//subCategory api
export const SubCategoryApi = async () => {
    try {
        const header = {
            method: "GET",
            headers: { "Content-type": "application/json",
                "Authorization":`Bearer ${getStorage().data.token}`
             }
        }
        const resData = await fetch(`${API_BASE_URL}${API_ROUTER.subcategory.getsubcaategory}`, header)
        return await resData.json()
    } catch (err) { console.log(err) }
}


//add subctegory api
export const AddSubcategoryApi = async (data) => {
    try {
        const header = {
            method: "POST",
            headers: { "Content-type": "application/json",
                "Authorization":`Bearer ${getStorage().data.token}`
             },
            body: JSON.stringify(data)
        }
        const resData = await fetch(`${API_BASE_URL}${API_ROUTER.subcategory.addsubcategory}`, header)
        return await resData.json()
    } catch (err) {
        console.log(err)
    }
}

//delete subcategor api 
export const DeleteSubcategory = async (data) => {
    console.log(data._id)
    try {
        const header = {
            method: "Delete",
            headers: { "Content-type": "application/json",
                "Authorization":`Bearer ${getStorage().data.token}`
             },
            //here will body if have
        }
        const delteRes = await fetch(`${API_BASE_URL}${API_ROUTER.subcategory.deletesubcategory}/${data._id}`, header)
        const resData = await delteRes.json()
        return resData
    } catch (err) {
        console.log(err)
    }
}
export const UpdateSubCatApi = async (id, data) => {
    console.log('updateapi data', data)
    try {
        const header = {
            method: "PUT",
            headers: { "Content-type": "application/json",
                "Authorization":`Bearer ${getStorage().data.token}`
             },
            body: JSON.stringify(data)

        }
        const res = await fetch(`${API_BASE_URL}${API_ROUTER.subcategory.updatesubcategory}/${id}`, header)
        const resData = await res.json()
        return resData
    } catch (err) {
        console.log(err)
    }
}

//subcategory aggregate
export const SubcategoryAggregate = async (id)=>{
    try{
        if(id!=undefined || null){
            const header ={
                method:"GET",
                headers:{"Content-type":"application/json",
                    "Authorization":`Bearer ${getStorage().data.token}`
                }
            }
            const resData = await fetch(`${API_BASE_URL}${API_ROUTER.subcategory.susbcataggregate}/${id}`,header)
            const resObjData = await resData.json();
            return resObjData;
        }
    }catch(err){
        console.log(err)
    }
}





//PRODUCT API'S
//addProduct api..
export const AddProductApi = async (data) => {
    try {
        const header = {
            method: "POST",
            headers: { "Content-type": "application/json",
                "Authorization":`Bearer ${getStorage().data.token}`
             },
            body: JSON.stringify(data)
        }
        const resData = await fetch(`${API_BASE_URL}${API_ROUTER.product.addProduct}`, header);
        const resObj = await resData.json();
        return resObj;
    } catch (err) {
        console.log(err)
    }
}


//get all product api..
export const GetAllProdectApi = async () => {
    try {
        const header = {
            method: "GET",
            headers: { "Content-type": "application/json",
                "Authorization":`Bearer ${getStorage().data.token}`
             }
        }
        const resData = await fetch(`${API_BASE_URL}${API_ROUTER.product.allProduct}`, header);
        const resObj = await resData.json();
        return resObj;
    } catch (err) {
        console.log(err)
    }
}


//getProductWithImage
export const GetAllProdectWithImageApi = async (id) => {
    try {
        const header = {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization":`Bearer ${getStorage().data.token}`
            }
        }
        const res = await fetch(`${API_BASE_URL}${API_ROUTER.product.allProductWithImg}/${id}`, header);
        const resData = await res.json()
        return resData;
    } catch (err) {
        console.log(err)
    }
}


//get Single product details api
export const GetSingleProduct = async (id) => {
    try {
        const header = {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization":`Bearer ${getStorage().data.token}`
            }
        }
        const res = await fetch(`${API_BASE_URL}${API_ROUTER}`)
    } catch (err) {
        console.log(err)
    }
}

//update product api
export const updateProductApi = async (data)=>{
    console.log("api data",data)
    const id = data._id
    try{
        const header ={
            method:"PUT",
            headers:{
                "Content-type":"application/json",
                "Authorization":`Bearer ${getStorage().data.token}`,
          
            },
            body:JSON.stringify(data)
        }
    const res = await fetch(`${API_BASE_URL}${API_ROUTER.product.updateProduct}/${id}`,header)
    return await res.json();
    }catch(err){
        console.log(err)
    }
}

//delete product api start
export const DeleteProductApi = async(id)=>{
    try{
        const header ={
            method:"DELETE",
            headers:{"Content-type":"application/json",
                "Authorization":`Bearer ${getStorage().data.token}`
            }
        }
        const resData = await fetch(`${API_BASE_URL}${API_ROUTER.product.delteProduct}/${id}`,header);
        return await resData.json()
    }catch(err){
        console.log(err)
    }
}
//delete product api end

//search product api start

export const SearchProductApi =async(name)=>{
    console.log(name)
    try{
        const header ={
            method:"GET",
            headers:{
                "Content-type":"application/json",
                "Authorization":`Bearer ${getStorage().data.token}`
            }
        }
        const resData = await fetch(`${API_BASE_URL}${API_ROUTER.product.searchProduct}?name=${name}`,header);
        return await resData.json()
    }catch(err){
        console.log(err)
    }
}

//search product api end

//product image upload api

export const ProductImage = async(image)=>{
   try{
    const header ={
        method:"POSt",
        headers:{
            'Authorization':`Bearer ${getStorage().data.token}`
        },
        body:image
    }
    const res = await fetch(`${API_BASE_URL}${API_ROUTER.product.productImage}`, header)
    return await res.json();
   }catch(err){
    console.log(err)
   }
}
//product image upload api end
//PRODUCT API'S end



//slider api start here

//get slider

export const GetSlider = async()=>{
   try{
    const header ={
        method:"GET",
        headers:{
            "Content-type":"application/json",
            "Authorization":`Bearer ${getStorage().data.token}` 
        }
    }
    const res = await fetch(`${API_BASE_URL}${API_ROUTER.slider.getslider}`,header);
    return await res.json();
   }catch(err){
    console.log(err)
   }
}

export const UploadImageApi = async(image)=>{
    const header ={
        method:"POST",
        headers:{
            "Authorization":`Bearer ${getStorage().data.token}`
        },
        body:image
    }
    const res = await fetch(`${API_BASE_URL}${API_ROUTER.slider.addslider}`,header);
    return await res.json()
}
//get slider end

//slider api end here


//NOTIFICATION API 
//ADD NOTIFICATION API
export const AddNotification = async (data)=>{
    try{
        const header ={
            method:"POST",
            headers:{"Content-type":"application/json",
                "Authorization":`Bearer ${getStorage().data.token}`
            },
            body:JSON.stringify(data)
        }
    const resData = await fetch(`${API_BASE_URL}${API_ROUTER.notification.addNotifcation}`,header);
    return await resData.json()
    }catch(err){
        console.log(err)
    }
}

export const GetAllNotification = async ()=>{
    try{
        const header ={
            method:"GET",
            headers:{"Content-type":"application/json",
                "Authorization":`Bearer ${getStorage().data.token}`
            }
        }
    const resData = await fetch(`${API_BASE_URL}${API_ROUTER.notification.getNotifcation}`,header);
    return await resData.json()
    }catch(err){
        console.log(err)
    }
}

//NOTIFICATION API END


//upload image api testting
