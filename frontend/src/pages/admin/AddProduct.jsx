import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function AddProduct() {
  const { userInfo } = useSelector((state) => state.user);
  const handleAddProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("brand", brand);
    formData.append("price", price);
    formData.append("image", image);
    formData.append("description", description);
    formData.append("stock", stock);
    formData.append("category", category);
    formData.append("name", name);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: userInfo.token,
      },
    };
    const { data } = await axios.post(
      "http://localhost:5000/api/products",
      formData,
      config
    );
    console.log(data.result);
    e.target.reset();
  };

  const [name, setname] = useState();
  const [brand, setbrand] = useState();
  const [price, setprice] = useState();
  const [image, setimage] = useState();
  const [description, setdescription] = useState();
  const [stock, setstock] = useState();
  const [category, setcategory] = useState();
  const [preview, setpreview] = useState();
  const handleImage = (e) => {
    setimage((pre) => e.target.files[0]);
    setpreview(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <>
      {/* 
                brand
                price
                image
                description
                stock
                category 
            */}
      <div className="container">
        {JSON.stringify(userInfo.token)}
        <div className="row">
          <div className="col-sm-6 offset-sm-3">
            <div className="card">
              <div className="card-header">Add Product</div>
              <div className="card-body">
                <form onSubmit={handleAddProduct}>
                  <input
                    type="text"
                    placeholder="name"
                    className="form-control"
                    onChange={(e) => setname(e.target.value)}
                  />
                  <br />
                  <input
                    type="text"
                    placeholder="brand"
                    className="form-control"
                    onChange={(e) => setbrand(e.target.value)}
                  />
                  <br />
                  <input
                    type="number"
                    placeholder="price"
                    className="form-control"
                    onChange={(e) => setprice(e.target.value)}
                  />
                  <br />
                  <div className="d-flex gap-2">
                    <input
                      type="file"
                      placeholder="image"
                      className="form-control"
                      onChange={handleImage}
                    />
                    <img
                      src={preview}
                      alt=""
                      className="img-fluid w-25 h-25 "
                    />
                  </div>
                  <br />
                  <textarea
                    type="text"
                    placeholder="description"
                    className="form-control"
                    onChange={(e) => setdescription(e.target.value)}
                  ></textarea>
                  <br />
                  <input
                    type="number"
                    placeholder="stock"
                    className="form-control"
                    onChange={(e) => setstock(e.target.value)}
                  />
                  <br />
                  <input
                    type="text"
                    placeholder="category"
                    className="form-control"
                    onChange={(e) => setcategory(e.target.value)}
                  />
                  <br />
                  <button className="btn btn-success w-100">Add Product</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
