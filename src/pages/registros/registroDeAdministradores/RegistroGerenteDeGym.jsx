import React from "react";
import { RegistroUsuarios } from "./../../../components/RegistroUsuarios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const RegistroGerenteDeGym = () => {
  const navigate = useNavigate();
  const nagigateLogin = () => navigate("/login");
  const [dataGimnasio, setDataGimnasio] = useState();
  const [id, setIdGimnasio] = useState();
  const [display1, setDisplay1] = useState("");
  const [display2, setDisplay2] = useState("d-none");
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const custonSubmit = (d) => {

    axios
      .post("http://localhost:8080/api/gimnasios/create", d)
      .then(function (respuesta) {
        console.log("Solicitud exitosa. Respuesta del servidor:", respuesta);
        // Aquí puedes manejar la respuesta del servidor
        alert("Usuario registrado correctamente");
        nagigateLogin();
      })
      .catch(function (error) {
        console.error("Error al realizar la solicitud:", error);
        // Manejo de errores en caso de que la solicitud falle
        alert("Ocurrió un error, intenta de nuevo");
      });
  };

  const registerData = (d) => {
    setDataGimnasio({ Correo: d.correo, Contraseña: d.contraseña });
    setDisplay1("d-none");
    setDisplay2("");
  };
  return (
    <>
      <div className="container-registrar">
        <div className={display1}>
          <RegistroUsuarios
            tipoRegistro={"Gerente de gym"}
            data={registerData}
            setId={setIdGimnasio}
          />
        </div>
        <div className={display2}>
          <div className="contenedor-formulario animate__animated animate__fadeIn">
            <h2>Registro de Gimnasio</h2>
            <br />
            <form onSubmit={handleSubmit(custonSubmit)}>
              <div className="row">
                <div className="col">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Ingrese nombre del Gimnasio
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    {...register("nombre", {
                      required: {
                        value: true,
                        message: "Este campo no puede estar vacio",
                      },
                    })}
                  />
                </div>
                <div className="col">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Ingrese su horario horario
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    {...register("horarios", {
                      required: {
                        value: true,
                        message: "Este campo no puede estar vacio",
                      },
                    })}
                  />
                </div>
                <div className="col">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Ingrese costo membresia mensual
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    {...register("costoMensual", {
                      required: {
                        value: true,
                        message: "Este campo no puede estar vacio",
                      },
                    })}
                  />
                </div>  
              </div>
              <br />
              <div className="row">
                <div className="col">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Ingrese NIT del GYM
                  </label>
                  <input className="form-control" type="text" {...register("NIT", {
                      required: {
                        value: true,
                        message: "Este campo no puede estar vacio",
                      },
                    })}/>
                </div>
                <div className="col">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Ingrese ciudad del gimnasio
                  </label>
                  <input className="form-control" type="text" {...register("ciudad", {
                      required: {
                        value: true,
                        message: "Este campo no puede estar vacio",
                      },
                    })}/>
                </div>
                <div className="col">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Ingrese barrio del gimnasio
                  </label>
                  <input className="form-control" type="text" {...register("barrio", {
                      required: {
                        value: true,
                        message: "Este campo no puede estar vacio",
                      },
                    })}/>
                </div>
                <br />
              </div>
              <br />
              <div className="row">
                
                <div className="col">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Ingrese dirección del gimnasio
                  </label>
                  <input className="form-control" type="text" {...register("direccion", {
                      required: {
                        value: true,
                        message: "Este campo no puede estar vacio",
                      },
                    })}/>
                </div>
                <div className="col"></div>
                <div class="col">
                  <br />
                  <button type="submit" class="btn btn-primary mt-2">
                    Registrar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
