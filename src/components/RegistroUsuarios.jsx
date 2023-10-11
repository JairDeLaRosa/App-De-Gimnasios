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
        data(d)
      };

  return (
    <>
      <div className={classContent}>
        <h2>Registro de {tipoRegistro}</h2>
        <form className="formulario" onSubmit={handleSubmit(custonSubmit)}>
          <div class="row">
            <div class="col">
              <label for="exampleFormControlInput1" class="form-label">
                Enter Nambers
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="nambers"
                {...register("nambers", {
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
              {errors.nambers && <small>{errors.nambers.message}</small>}
            </div>
            <div class="col">
              <label for="exampleFormControlInput1" class="form-label">
                Enter surnames
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="surnames"
                {...register("surnames", {
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
              {errors.surnames &&(<small>{errors.surnames.message}</small>)}
            </div>
            <div class="col">
              <label for="exampleFormControlInput1" class="form-label">
                Enter phone number
              </label>
              <input
                type="number"
                class="form-control"
                placeholder="Example: 3008021***"
                aria-label="name"
                {...register('phoneNumber',{
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
              {errors.phoneNumber && <small>{errors.phoneNumber.message}</small>}
            </div>
            
          </div>

          <br />

          <div class="row">
          <div class="col">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                {...register("email", {
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
              {errors.email && <small>{errors.email.message}</small>}
            </div>
            <div class="col">
              <label for="exampleFormControlInput1" class="form-label">
                Enter password between 6 and 20 characters
              </label>
              <input
                type="password"
                class="form-control"
                placeholder="password"
                aria-label="name"
                {...register('password',{
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
              {errors.password && (<small>{errors.password.message}</small>)}
            </div>
            <div class="col">
              <label for="exampleFormControlInput1" class="form-label">
                Confirm password
              </label>
              <input
                type="password"
                class="form-control"
                placeholder="password"
                aria-label="name"
                {...register('confirmPassword',{
                  required: {
                    value: true,
                    message: 'Este campo no puede estar vacio'
                  },
                  validate: (data)=>{
                    return data==watch("password") || "No coinciden"
                  }
                })}             
                 />
              {errors.confirmPassword&&(<small>{errors.confirmPassword.message}</small>) }
            </div>
          </div>

          <br />
          <div class="row">
            <div class="col">
              <label for="exampleFormControlInput1" class="form-label">
                Enter age
              </label>
              <input
                type="number"
                class="form-control"
                placeholder="age"
                aria-label="name"
                {...register('age',{
                  required: {
                    value: true,
                    message: 'Este campo no puede estar vacio'
                  }
                })}
              />
              {errors.age && <small>{errors.age.message}</small>}
            </div>
            <div class="col">
              <label for="exampleFormControlInput1" class="form-label">
                Enter identification
              </label>
              <input
                type="number"
                class="form-control"
                placeholder="Identification"
                aria-label="name"
                {...register('identification',{
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
              {errors.identification && <small>{errors.identification.message}</small>}
            </div>
            <div class="col submit">
              <br />
              <button type="submit" class="btn btn-primary col-5 mt-2 next">
                Next
              </button>
            </div>
          </div>
          <br />
        </form>
      </div>
    </>
  )
}
