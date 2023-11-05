import React from "react";
import "./../css/login.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
  const [alert, setAlert]=useState("alert alert-warning row d-none")
  const navigate=useNavigate()
  const menuClientes=() => navigate('/cliente')
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const custonSubmit=(d)=>{
    // Peso: d.peso,
    // Altura: d.Altura})
    axios.post('http://localhost:8080/api/usuarios/validate', d)
  .then(function (respuesta) {
    console.log('Solicitud exitosa. Respuesta del servidor:', respuesta);
    // Aquí puedes manejar la respuesta del servidor
    if (respuesta.data.validacion===true){
      menuClientes()
    }else{
      setAlert("alert alert-warning row")
    }
  })
  .catch(function (error) {
    console.error('Error al realizar la solicitud:', error);
    // Manejo de errores en caso de que la solicitud falle
  });
  }

  return (
    <>
      <div className="container-principal">
        <form className="formLogin animate__animated animate__bounceInUp" onSubmit={handleSubmit(custonSubmit)}>
        <h2 className="title">Inicio de sesión</h2>

          <div class="mb-3">
            <input
              placeholder="Email"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              {...register("correo",{
                required: {
                  value: true,
                  message: "Este campo no puede estar vacio"
                },
              })}
            />
          </div>
          <div class="mb-3">
            <input
              placeholder="Contraseña"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              {...register("contraseña",{
                required: {
                  value: true,
                  message: "Este campo no puede estar vacio"
                }
              })}
            />
          </div>
          <div class={alert} role="alert">
                  Usuario no encontrado
                </div>
          <div class="mb-3 register">
            <label>¿Eres nuevo?</label>
            <Link className="d-inline-block" to={"/registro"}>
              Registrarse
            </Link>
          </div>
          <button type="submit" class="btn btn-primary">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </>
  );
};
