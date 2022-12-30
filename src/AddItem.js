import { useState } from 'react'

const AddItem = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [brand, setBrand] = useState('')
    const [price, setPrice] = useState('')
    // const [selectedFile, setSelectedFile] = useState('');


    const onSubmit = () => {
        fetch('http://localhost:9000/items/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                name: name,
                description:description,
                category:category,
                brand:brand,
                price:price,
                
            })
        })
        .then(()=>{
            // Once posted, the user will be notified 
            alert('You have been added to the system!');
        })


    }

    



    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Name</label>

                <input 
                    type="text" placeholder="Name of product"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="form-control">
                <label>Description</label>

                <input 
                    type="text" placeholder="Description of product"
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} />
            </div>

            <div className="form-control">
                <label>Category</label>

                <input 
                    type="text" placeholder="Category of product"
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)} />

            </div>

            <div className="form-control">
                <label>Brand</label>

                <input
                    type="text" placeholder="Brand of product"
                    value={brand} 
                    onChange={(e) => setBrand(e.target.value)} />
            </div>

            <div className="form-control">
                <label>Price</label>
                <input
                    type="number" placeholder="Price of product"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)} />
            </div>

              {/* <input
                type="file"
                value={selectedFile}
                onChange={(e) => setSelectedFile(e.target.files[0])}  /> */}
            

            <button type="submit"> Submit</button>

        </form>
    );
}

export default AddItem;