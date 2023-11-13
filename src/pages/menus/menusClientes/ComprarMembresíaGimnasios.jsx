import React from "react";
import "../../../css/menus.css";
import "../../../css/login.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export const ComprarMembresíaGimnasios = () => {
    const [inputPagar,setInputPagar]=useState(0)
    const inputChange=({target})=>{
        setInputPagar(target.value)
        console.log(inputPagar)
    }
    const pagar=(numeroMeses, precioMembresía)=>numeroMeses*precioMembresía
  return (
    <>
      <div className="container-principal">
      <form className="formLogin animate__animated animate__bounceInUp" >
        <h2 className="title">Pago de membresía</h2>

          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Ingrese numero de meses</label>
            <input
              type="Number"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={inputChange}
            />
          </div>    
          <div class="mb-3 pagar">
            <p>Total a pagar : {pagar(inputPagar,70000)} $</p>
          </div>    
          <div class="mb-3 register">
            <Link className="d-inline-block" to={"/registro"}>
              Atrás
            </Link>
          </div>
          <button type="submit" class="btn btn-primary">
            Pagar
          </button>
        </form>
      </div>
    </>
  );
};
