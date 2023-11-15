import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const RegistroUsuarios = ({tipoRegistro, data, setId}) => {
    var classContent= "contenedor-formulario animate__animated animate__fadeIn"
    const {
        register,
        watch,
        formState: { errors },
        handleSubmit,
      } = useForm();

      const custonSubmit = (d) => {
        data(d)
        axios
      .post("http://localhost:8080/api/usuarios/create", {
        ...d,
        tipoUsuario: tipoRegistro
      })
      .then(function (respuesta) {
        console.log("Solicitud exitosa. Respuesta del servidor:", respuesta);
        // Aquí puedes manejar la respuesta del servidor
          setId(respuesta.data);
      })
      .catch(function (error) {
        console.error("Error al realizar la solicitud:", error);
        // Manejo de errores en caso de que la solicitud falle
        alert("Ocurrió un error, intenta de nuevo");
      });
        
      };

  return (
    <>
      <div className={classContent}>
        <h2>Registro de {tipoRegistro}</h2>
        <form className="formulario" onSubmit={handleSubmit(custonSubmit)}>
          <div class="row">
            <div class="col">
              <label for="exampleFormControlInput1" class="form-label">
                Nombres
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="nombres"
                {...register("nombres", {
                  required: {
                    value: true,
                    message: 'Este campo no puede estar vacio'
                  },
                  maxLength: {
                    value: 40,
                    message: 'Exedió el limite de letras'
                  }
                })}
              />
              {errors.nombres && <small>{errors.nombres.message}</small>}
            </div>
            <div class="col">
              <label for="exampleFormControlInput1" class="form-label">
                Apellidos
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Apellidos"
                {...register("apellidos", {
                  required: {
                    value: true,
                    message: 'Este campo no puede estar vacio'
                  },
                  maxLength: {
                    value: 40,
                    message: 'Exedió el limite de letras'
                  }
                })}
              />
              {errors.apellidos &&(<small>{errors.apellidos.message}</small>)}
            </div>
            <div class="col">
              <label for="exampleFormControlInput1" class="form-label">
                Celular
              </label>
              <input
                type="number"
                class="form-control"
                placeholder="Ejemplo: 3008021***"
                aria-label="name"
                {...register('celular',{
                  required:{
                    value: true,
                    message: 'Este campo no puede estar vacio'
                  },
                  pattern: {
                    value: /^(3\d{9})$/,
                    message: 'No cumple con los requisitos'
                  }
                })}
              />
              {errors.celular && <small>{errors.celular.message}</small>}
            </div>
            
          </div>

          <br />

          <div class="row">
          <div class="col">
              <label for="exampleFormControlInput1" class="form-label">
                Correo
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                {...register("correo", {
                  required: {
                    value: true,
                    message: 'Este campo no puede estar vacio'
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: 'No cumple con los requisitos'
                  }
                })}
              />
              {errors.correo && <small>{errors.correo.message}</small>}
            </div>
            <div class="col">
              <label for="exampleFormControlInput1" class="form-label">
                Contraseña entre 6 y 20 caracteres
              </label>
              <input
                type="password"
                class="form-control"
                placeholder="Contraseña"
                aria-label="name"
                {...register('contraseña',{
                  required: {
                    value: true,
                    message: 'Este campo no puede estar vacio'
                  },
                  pattern: {
                    value: /^.{6,20}$/,
                    message: 'No cumple con los requisitos'
                  },
                })}
              />
              {errors.contraseña && (<small>{errors.contraseña.message}</small>)}
            </div>
            <div class="col">
              <label for="exampleFormControlInput1" class="form-label">
                Confirmar contraseña
              </label>
              <input
                type="password"
                class="form-control"
                placeholder="Contraseña"
                aria-label="name"
                {...register('confirmarContraseña',{
                  required: {
                    value: true,
                    message: 'Este campo no puede estar vacio'
                  },
                  validate: (data)=>{
                    return data==watch("contraseña") || "No coinciden"
                  }
                })}             
                 />
              {errors.confirmarContraseña&&(<small>{errors.confirmarContraseña.message}</small>) }
            </div>
          </div>

          <br />
          <div class="row">
            <div class="col">
              <label for="exampleFormControlInput1" class="form-label">
                Fecha de nacimiento
              </label>
              <input
                type="date"
                class="form-control"
                placeholder="Edad"
                aria-label="name"
                {...register('fechaDeNacimiento',{
                  required: {
                    value: true,
                    message: 'Este campo no puede estar vacio'
                  }
                })}
              />
              {errors.fechaDeNacimiento && <small>{errors.fechaDeNacimiento.message}</small>}
            </div>
            <div class="col">
              <label for="exampleFormControlInput1" class="form-label">
                Cedula
              </label>
              <input
                type="number"
                class="form-control"
                placeholder="Identification"
                aria-label="name"
                {...register('cedula',{
                  required:{
                    value: true,
                    message: 'Este campo no puede estar vacio'
                  },
                  pattern: {
                    value: /^\d{3,10}$/,
                    message: 'No cumple con los requisitos'
                  }
                })}
              />
              {errors.cedula && <small>{errors.cedula.message}</small>}
            </div>
            <div class="col submit">
              <br />
              <button type="submit" class="btn btn-primary col-5 mt-2 next">
                Siguiente
              </button>
            </div>
          </div>
          <br />
        </form>
      </div>
    </>
  )
}
