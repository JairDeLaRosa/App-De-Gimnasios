import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const RegistroUsuarios = ({tipoRegistro, data}) => {
    var classContent= "contenedor-formulario animate__animated animate__fadeIn"
    const {
        register,
        watch,
        formState: { errors },
        handleSubmit,
      } = useForm();

      const custonSubmit = (d) => {
        data({
          ...d,
          TipoUsuario: tipoRegistro
        })
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
                {...register("Nombres", {
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
              {errors.Nombres && <small>{errors.Nombres.message}</small>}
            </div>
            <div class="col">
              <label for="exampleFormControlInput1" class="form-label">
                Apellidos
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Apellidos"
                {...register("Apellidos", {
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
              {errors.Apellidos &&(<small>{errors.Apellidos.message}</small>)}
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
                {...register('Celular',{
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
              {errors.Celular && <small>{errors.Celular.message}</small>}
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
                {...register("Correo", {
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
              {errors.Correo && <small>{errors.Correo.message}</small>}
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
                {...register('Contraseña',{
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
              {errors.Contraseña && (<small>{errors.Contraseña.message}</small>)}
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
                {...register('ConfirmarContraseña',{
                  required: {
                    value: true,
                    message: 'Este campo no puede estar vacio'
                  },
                  validate: (data)=>{
                    return data==watch("Contraseña") || "No coinciden"
                  }
                })}             
                 />
              {errors.ConfirmarContraseña&&(<small>{errors.ConfirmarContraseña.message}</small>) }
            </div>
          </div>

          <br />
          <div class="row">
            <div class="col">
              <label for="exampleFormControlInput1" class="form-label">
                Edad
              </label>
              <input
                type="number"
                class="form-control"
                placeholder="Edad"
                aria-label="name"
                {...register('Edad',{
                  required: {
                    value: true,
                    message: 'Este campo no puede estar vacio'
                  }
                })}
              />
              {errors.Edad && <small>{errors.Edad.message}</small>}
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
                {...register('Cedula',{
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
              {errors.Cedula && <small>{errors.Cedula.message}</small>}
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
