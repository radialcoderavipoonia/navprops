import React, { useState } from "react";
import { Container } from "react-bootstrap";

const FormSumbit = () => {
  const [InputData, setInputData] = useState({ Name: "", Age: "", Email: "" });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputData({ ...InputData, [name]: value });
  };
    const FormSumbit = (e) => {
      e.preventDefault();
      console.log(InputData);
      setInputData({ Name: "", Age: "", Email: "" });
    };
  return (
    <>
      <Container className="py-5 text-center">
        <form onSubmit={FormSumbit}>
          <input
            onChange={handleInput}
            type="text"
            name="Name"
            value={InputData.Name}
            placeholder="Name"
          />
          <input
            onChange={handleInput}
            type="number"
            name="Age"
            value={InputData.Age}
            placeholder="Age"
            className="ms-3"
          />
          <input
            onChange={handleInput}
            type="email"
            name="Email"
            value={InputData.Email}
            placeholder="Email"
            className="ms-3"
          />
          <button type="sumbit" className="ms-3">sumbit</button>
        </form>
      </Container>
    </>
  );
};

export default FormSumbit;
