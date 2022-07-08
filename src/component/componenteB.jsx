import React, {useState} from 'react'
import { PropTypes } from "prop-types";

export default function ComponenteB(props) {

    const [conectado, setConectado] = useState(props.conectado);

    ComponenteB.propTypes = {
        
        nombre: PropTypes.string,
        apellido: PropTypes.string,
        email: PropTypes.string,
        conectado: PropTypes.bool,
      }
  return (
    
    <div>
    {
        conectado ? 
        <>
           
            <h1>Contacto en Linea</h1>
            <h2>{props.nombre} {props.apellido}</h2>
            <button onClick={() => {
                setConectado(false);
                props.setConectado(false);
            }}>Desconectar</button>
        </> : 
        <>
            <h1>Contacto no disponible</h1>
            <button onClick={() => {
                setConectado(true);
                props.setConectado(true);
            }}>Conectar</button>
        </>
    }
    </div>
  )
}
