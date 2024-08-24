export const API_ROUTER = {

    auth: {
        signup: "/auth/signup",
        login: "/auth/login",
    },
    category: {
        getallcategory: "/category/getAllCategory",
        deletecategory: "/category/deleteCategory",
        addcategory: "/category/addCategory",
        search: "/category/search",
        aggregate: "/category/categoryAggregate",
        updatecategory: "/categoryupdateCategory",
        singlecategory: "/singlecategory",
    },

    subcategory: {
        getsubcaategory: "/subcategory/getsubcat",
        addsubcategory: "/subcategory/addsubcat",
        deletesubcategory: "/subcategory/deletesubcat",
        updatesubcategory: "/subcategory/updatesubcat",
        susbcataggregate:"/subcategory/aggregate"
    }
    ,
    product: {
        addProduct: "/product/addProduct",
        updateProduct: "/product/updateProduct",
        delteProduct: "/product/deleteProduct",
        singleProduct: "/product/singleProduct",
        allProduct: "/product/allProduct",
        allProductWithImg: "/product/aggregateProduct",
        searchProduct:"/product/searchProduct",
        productImage:'/product/upload'
    },
    slider:{
        getslider:"/slider/getSlider",
        addslider:"/slider/addSlider",
        delteslider:"/slider/deleteSlider"
    },
    notification:{
        addNotifcation:'/notification/addNotification',
        getNotifcation:"/notification/getAllNotification"
    },
    download:{
        download:"/download"
    }
}