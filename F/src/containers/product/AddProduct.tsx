import Input from "../../components/Input";
import * as React from "react";
import { useState} from "react";
import Select from "components/Select";
import { useNavigate } from 'react-router-dom';


function AddProduct() {
  const navigate = useNavigate();

  const [category, setCategory] = useState<string>(""); // Định kiểu dữ liệu của category là string
  const [color, setColor] = useState<string>(""); // Định kiểu dữ liệu của color là string
  const [size, setSize] = useState<string>(""); // Định kiểu dữ liệu của size là string
  const [brand, setBrand] = useState<string>(""); // Định kiểu dữ liệu của brand là string
  
  const handleCategoryChange = (selectedValue: string) => {
    setCategory(selectedValue);
  };

  const handleColorChange = (selectedValue: string) => {
    setColor(selectedValue);
  };

  const handleSizeChange = (selectedValue: string) => {
    setSize(selectedValue);
  };
  const handleBrandChange = (selectedValue: string) => {
    setBrand(selectedValue);
  };
  const [name, setName] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');
  const [price,  setPrice]  = useState('');
  const  add = async () =>{
    
    const formData =  new FormData();
    formData.append('name', name);
    if (file) {
      formData.append('file', file);
    }
    formData.append('quantity', quantity);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('color', color);
    formData.append('brand', brand);
    formData.append('size', size);
    let result = await fetch("http://127.0.0.1:8000/api/addProduct", {
      method: 'POST',
      body: formData
    });
    alert(`Data has been saved `);
    navigate('/productList');

    console.warn(result);
  }
  return (
    <>
      <div className="container">
        <div className="row row-cols-lg-2 row-cols-1 row-cols-md-2 d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              alt="sample"
              className="img-fluid"
            />
          </div>
          <div className="col">
            <div className="row">
              <Input
                id="name"
                label="Product Name"
                type="text"
                placeholder="Product Name"
                autoComplete="off"
                labelSize={3}
                className="form-control form-control-lg"
                onChange={(e)=>setName(e.target.value)}
              />
              <Input
                id="file_path"
                label="Product File Image"
                type="file"
                placeholder="jpg, npg, png,..."
                autoComplete="off"
                labelSize={3}
                className="form-control form-control-lg"
                onChange={handleFileChange}

              />
              <Input
                id="quantity"
                label="Quantity"
                type="number"
                placeholder="Quantity"
                autoComplete="off"
                labelSize={3}
                className="form-control form-control-lg"
                onChange={(e)=>setQuantity(e.target.value)}
              />
              <Input
                id="description"
                label="Description"
                type="text"
                placeholder="Information"
                autoComplete="off"
                labelSize={3}
                rows={3}
                className="form-control form-control-lg"
                onChange={(e)=>setDescription(e.target.value)}

              />
              <Input
                id="price"
                label="Product Price"
                type="number"
                placeholder="Product price"
                autoComplete="off"
                labelSize={3}
                className="form-control form-control-lg"
                onChange={(e)=>setPrice(e.target.value)}
              />
              <Select
                id="category"
                label="Category"
                labelSize={3}
                options={["Category 1", "Category 2", "Category 3"]}
                defaultOption="Chọn một danh mục"
                selectedOption={category}
                onOptionChange={handleCategoryChange}
                
              />

              <Select
              id="color"
              label="Color"
              labelSize={3}
                options={["Color 1", "Color 2", "Color 3"]}
                defaultOption="Chọn một màu sắc"
                selectedOption={color}
                onOptionChange={handleColorChange}
              />
              <Select
              id="brand"
              label="Brand"
              labelSize={3}
                options={["Brand A", "Brand B", "Brand C"]}
                defaultOption="Chọn một màu sắc"
                selectedOption={brand}
                onOptionChange={handleBrandChange}
              />

              <Select
              id="size"
              label="Size"
              labelSize={3}
                options={["13.3","14", "15.6", "17.3"]}
                defaultOption="Chọn một kích thước"
                selectedOption={size}
                onOptionChange={handleSizeChange}
              />
              
            </div>
            <div className="row justify-content-center">
              <div className="col d-flex justify-content-center">
              <button className="btn btn-primary" onClick={add}>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
