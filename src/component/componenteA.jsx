import React, { Component } from 'react'
import ComponenteB from './componenteB';

class ComponenteA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: props.nombre,
            apellido: props.apellido,
            email: props.email,
            conectado: props.conectado
         };
    }
    render() {
        return (
           <div>
            <h2>Hola</h2>

            <ComponenteB nombre={this.state.nombre} apellido={this.state.apellido} email={this.state.email} conectado={this.state.conectado} />
           </div>
        )
     }
}

export default ComponenteA