import React, { useState } from "react";

export default function TableContent(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState(props.name);
  const [newAddress, setNewAddress] = useState(props.address);
  const [newPhone, setNewPhone] = useState(props.phone);
  const newData = { newName, newAddress, newPhone };

  function handleChangeName(e) {
    setNewName(e.target.value);
  }

  function handleChangeAddress(e) {
    setNewAddress(e.target.value);
  }

  function handleChangePhone(e) {
    setNewPhone(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (newData.newName && newData.newAddress && newData.newPhone) {
      if (isNaN(newData.newPhone)) {
        alert("Phone number must be number, not string!");
      } else {
        props.editTask(props.id, newData);
        setEditing(false);
      }
    } else {
      alert("All field must be filled!");
    }
  }

  const editingTemplate = (
    <tbody>
      <tr>
        <th scope="row">{props.number}</th>
        <td>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              value={newName}
              onChange={handleChangeName}
            ></input>
          </form>
        </td>
        <td>
          <input
            type="text"
            className="form-control"
            value={newAddress}
            onChange={handleChangeAddress}
          ></input>
        </td>
        <td>
          <input
            type="text"
            className="form-control"
            value={newPhone}
            onChange={handleChangePhone}
          ></input>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-secondary mr-2"
            onClick={() => setEditing(false)}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-info" onClick={handleSubmit}>
            Save
          </button>
        </td>
      </tr>
    </tbody>
  );

  const viewTemplate = (
    <tbody>
      <tr>
        <td>{props.number}</td>
        <td>{props.name}</td>
        <td>{props.address}</td>
        <td>{props.phone}</td>
        <td>
          <button
            type="button"
            className="btn btn-warning mr-2"
            onClick={() => setEditing(true)}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => props.deleteTask(props.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );

  // return <tbody>{isEditing ? editingTemplate : viewTemplate}</tbody>;

  if (isEditing) {
    return editingTemplate;
  }
  return viewTemplate;
}
