import React from "react";
import "./../../css/registroUsuarioComun.css";
import { useForm } from "../../hooks/useForm";

import { useState } from "react";
export const RegistroUsuarioComun = () => {
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidName, setIsValidName] = useState(true);
  const [useName, setName] = useState('');
  const [usePassword1, setPassword1] = useState('');
  const [usePassword2, setPassword2] = useState('');
  const [useEmail, setEmail] = useState('');

  const handlechangeName = ({target}) => {
    const {value} = target;
    setName(value);

    const regex = /^[a-zA-ZÀ-ÿ\s]{2,40}$/
    const isValidName= regex.test(value);
    setIsValidName(isValidName);
  }
  const handleChangeEmail=({target})=>{
    const {value}=target;
    setEmail(value);

    const regex= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    const isValidEmail = regex.test(value)
    setIsValidEmail(isValidEmail)
  }
  const onInputChange2 = ({ target }) => {
    const { value } = target;
    setPassword2(value);
  };
  const handleChange1 = (e)=>{
    const value =e.target.value;
    setPassword1(value);

    const regex = /^(?=.*\d)(?=.*[a-zA-Z])[\d\w]{6,20}$/;
    const isValidPassword=regex.test(value);
    setIsValidPassword(isValidPassword)
  }


  return (
    <div className="container-registrar">
      <div className="contenedor-formulario animate__animated animate__fadeIn">
        <h2>Registro de usuario común</h2>
        <form className="formulario">
          <div className="contenedor1">
            <div>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              id="name"
              value={useName}
              onChange={handlechangeName}
            />
            {isValidName==true && useName!= ''&&(
              <i className="bi bi-check-lg icons animate__animated animate__bounceIn icon"></i>            )}
            {isValidName==false && useName!= ''&&(
              <i className="bi bi-x animate__animated animate__bounceIn iconD"></i>
            )}
            </div>
            
            <div>
            <input
              placeholder="Email"
              type="email"
              className="form-control"
              id="inputEmail4"
              value={useEmail}
              onChange={handleChangeEmail}
            />
            {isValidEmail==true && useEmail!= undefined && useEmail!= ''&&(
              <i className="bi bi-check-lg icons animate__animated animate__bounceIn icon"></i>            )}
            {isValidEmail==false && useEmail!= undefined && useEmail!= ''&&(
              <i className="bi bi-x animate__animated animate__bounceIn iconD"></i>
            )}
            </div>
            
          </div>

          <div className="contenedor1">
            <div>
            <input
              placeholder="Contraseña: Entre 6 y 20 caracteres"
              type="password"
              className="form-control"
              id="inputPassword3"
              name="password1"
              value={usePassword1}
              onChange={handleChange1}
            />
            {isValidPassword==true && usePassword1!= undefined && usePassword1!= ''&&(
              <i className="bi bi-check-lg icons animate__animated animate__bounceIn icon"></i>            )}
            {isValidPassword==false && usePassword1!= undefined && usePassword1!= ''&&(
              <i className="bi bi-x animate__animated animate__bounceIn iconD"></i>
            )}
            <span>-Al menos un numero y una letra</span>
            </div>
            
            
            <div>
              <input
                placeholder="Confirmar Contraseña"
                type="password"
                className="form-control"
                id="inputPassword4"
                name="password2"
                onChange={onInputChange2}
              />
              {usePassword1 == usePassword2 && usePassword2 != undefined && usePassword2 != '' &&(
              <i className="bi bi-check-lg icons animate__animated animate__bounceIn icon"></i>
            )}
            {usePassword2 != undefined && usePassword2 != '' && usePassword1 != usePassword2&&( 
              <i className="bi bi-x animate__animated animate__bounceIn iconD"></i>
            )}
            </div>
          </div>

          <div className="contenedor1">
            <input type="number" step={1} className="form-control" placeholder="Edad" />
            <input type="number" step={0.1} className="form-control" placeholder="Altura en" />
          </div>

          <div className="contenedor1">
            <input type="number" step={0.1} className="form-control" placeholder="Peso en kg" />

            <button type="submit" className="btn btn-primary col-3">
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
