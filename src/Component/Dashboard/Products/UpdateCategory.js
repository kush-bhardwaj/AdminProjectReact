export default function UpdateCategory(){
    return(
        <>
            <div className="category">
        <div className="addCatForm">
        <form onSubmit={handlleSubmit}>
            <p><input type="text" placeholder="Category Name" onChange={handleChange} name="catName"></input></p>
            <p><input type="text" placeholder="Category Title" onChange={handleChange} name="catTitle"></input></p>
            <p><input type="submit" value="Add"></input><input value="Close" type="button" onClick={() => setCatShow(false)}></input></p>
          </form>
        </div>
      </div>
        </>
    )
}