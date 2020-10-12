import React ,{ useState }from "react";
import Error from './Error'
const Formulario = ({setConsulta}) => {
  const [busqueda, setBusqueda] = useState({
    artista: "",
    cancion: "",
  });

  const [error, setError] = useState(false);

  const actualizarBusqueda = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };
  const validarFormulario = e => {
      e.preventDefault()
    if (busqueda.artista.trim() === "" || busqueda.cancion.trim() === "") {
        setError(true);return 
    }
    setError(false)
    setConsulta(busqueda)
  };

  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form
          className="col card text-white bg-transparent mb-5 pt-5 pb-2"
          onSubmit={validarFormulario}>
            <fieldset>
              <legend className="text-center">Buscador Letras canciones</legend>
              {error?<Error mensaje='Todos los campos son obligatorios'/>:null}
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artista</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artista"
                      placeholder="Nombre Artista"
                      onChange={actualizarBusqueda}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Canción</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cancion"
                      placeholder="Nombre de la canción"
                      onChange={actualizarBusqueda}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-right">
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
