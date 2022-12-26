import {useState} from 'react'

const AddItem = () => {
    const[name,setName]=useState('')
    const[description,setDescription]=useState('')
    const[category,setCategory]=useState('')
    const[brand,setBrand]=useState('')
    const[price,setPrice]=useState('')



    return ( 
        <form className="add-form">
            <div className="form-control">
                <label>Name</label>
                <input type="text" placeholder="Name of product" 
                value={name} onChange={(e)=> setName(e.target.value)}/>
            </div>

            <div className="form-control">
                <label>Description</label>
                <input type="text" placeholder="Description of product"
                 value={description} onChange={(e)=> setDescription(e.target.value)}/>
            </div>

            <div className="form-control">
                <label>Category</label>
                <input type="text" placeholder="Category of product"
                value={category} onChange={(e)=> setCategory(e.target.value)} />

            </div>

            <div className="form-control">
                <label>Brand</label>
                <input type="text" placeholder="Brand of product" 
                value={brand} onChange={(e)=> setBrand(e.target.value)}/>
            </div>

            <div className="form-control">
                <label>Price</label>
                <input type="text" placeholder="Price of product" />
            </div>
            <input type="submit" value="Save Item" />
        </form>
     );
}
 
export default AddItem;