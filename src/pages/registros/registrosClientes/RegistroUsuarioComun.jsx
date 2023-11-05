import { useState } from "react";
import { RegistroUsuarios } from "./../../../components/RegistroUsuarios";
import "./../../../css/registroUsuarioComun.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const RegistroUsuarioComun = () => {
  const navigate=useNavigate()
  const nagigateLogin=()=> navigate('/login')
  const [dataUsuario, setDataUsuario] = useState();
  const [dataCliente, setDataCliente] = useState();

  const [display1, setDisplay1] = useState("");
  const [display2, setDisplay2] = useState("d-none");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const custonSubmit = (d) => {
    // Peso: d.peso,
    // Altura: d.Altura})
    console.log(dataUsuario);
    axios
      .post("http://localhost:8080/api/usuarios/create", dataUsuario)
      .then(function (respuesta) {
        console.log("Solicitud exitosa. Respuesta del servidor:", respuesta);
        // Aquí puedes manejar la respuesta del servidor
        alert("Usuario registrado")
        nagigateLogin()
      })
      .catch(function (error) {
        console.error("Error al realizar la solicitud:", error);
        // Manejo de errores en caso de que la solicitud falle
        alert("Ocurrió un error, intenta de nuevo")

      });
  };

  const registerData = (d) => {
    setDataUsuario(d);
    setDisplay1("d-none");
    setDisplay2("");
  };
  return (
    <>
      <div className="container-registrar">
        <div className={display1}>
          <RegistroUsuarios tipoRegistro={"Cliente"} data={registerData} />
        </div>
        <div className={display2}>
          <div className="contenedor-formulario animate__animated animate__fadeIn">
            <h2>Registro de clientes</h2>
            <br />
            <h4>Ingresar foto de perfil</h4>
            <br />
            <img
              src="https://us.123rf.com/450wm/thesomeday123/thesomeday1231712/thesomeday123171200009/91087331-icono-de-perfil-de-avatar-predeterminado-para-hombre-marcador-de-posici%C3%B3n-de-foto-gris-vector-de.jpg"
              alt="FotoPerfil"
            />
            <br />
            <form onSubmit={handleSubmit(custonSubmit)}>
              <div className="row">
                <input type="file" className="file" />
              </div>
              <br />
              <div className="row">
                <div class="col">
                  <label for="exampleFormControlInput1" class="form-label">
                    Enter weight
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Weight"
                    aria-label="name"
                    step={0.01}
                    {...register("peso", {
                      required: {
                        value: true,
                        message: "Este campo no puede estar vacio",
                      },
                    })}
                  />
                </div>
                <div class="col">
                  <label for="exampleFormControlInput1" class="form-label">
                    Enter height
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Height"
                    aria-label="name"
                    step={0.01}
                    {...register("Altura", {
                      required: {
                        value: true,
                        message: "Este campo no puede estar vacio",
                      },
                    })}
                  />
                </div>
                <div class="col">
                  <br />
                  <button type="submit" class="btn btn-primary mt-2">
                    Register
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
