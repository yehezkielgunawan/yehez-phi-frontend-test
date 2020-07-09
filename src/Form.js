import React, { useState } from "react";

export default function Form(props) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const data_user = { name, address, phone };

  function handleSubmit(e) {
    e.preventDefault();
    if (data_user.name && data_user.address && data_user.phone) {
      if (isNaN(data_user.phone)) {
        alert("Phone Number must be number, not string!");
      } else {
        props.addTask(data_user);
        setName("");
        setAddress("");
        setPhone("");
      }
    } else {
      alert("All data must be filled!");
    }
  }

  // function isNumber(value){
  //   if(isNaN(value)){
  //     console.log(`${value} is NOT number`);
  //   } else{
  //     console.log(`${value} is number`)
  //   }
  // }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeAddress(e) {
    setAddress(e.target.value);
  }

  function handleChangePhone(e) {
    setPhone(e.target.value);
  }

  return (
    <div className="card bg-light">
      <div className="card-header"><strong>Add New Data</strong></div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name-input">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              autoComplete="off"
              onChange={handleChangeName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address-input">Address</label>
            <input
              type="text"
              className="form-control"
              value={address}
              autoComplete="off"
              onChange={handleChangeAddress}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone-input">Phone</label>
            <input
              type="text"
              className="form-control"
              value={phone}
              autoComplete="off"
              onChange={handleChangePhone}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
