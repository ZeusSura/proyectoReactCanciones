import React, { Fragment, useEffect, useState } from "react";
import Formulario from "./Components/Formulario";
import Cancion from "./Components/Cancion";
import axios from 'axios'


function App() {
  const [consulta, setConsulta] = useState({});
  const [letra, setLetra] = useState("");
  const[biografia,setBiografia] = useState({})

  useEffect(() => {
    if (Object.keys(consulta).length === 0) {
      return;
    }

    const consultarAPI = async () => {
      const urlLyrics = `https://api.lyrics.ovh/v1/${consulta.artista}/${consulta.cancion}`;
      const urlBiogradia = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${consulta.artista}`
      
      const [letraA,informacion] =await  Promise.all([
       axios(urlLyrics),
       axios(urlBiogradia)
      ])

      console.log(letraA.data.lyrics)
      console.log(informacion.data.artists[0])
    };

    consultarAPI();
  }, [consulta]);
  return (
    <Fragment>
      <Formulario setConsulta={setConsulta} />
      <div className="container mt-5">
        <div className="row">
          <div
          className="col-md-6"
          ></div>
          <div
          className="col-md-6"
          ><Cancion
          letra={letra}/></div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
