import React, { Component } from 'react';

class Teste extends Component{
    render(){
        const{nome,idade} =this.props;

        return(
            <div className="teste">
                <div>Nome: {this.props.nome}</div>
                <div>Idade: {this.props.idade}</div>
                
            </div>
        )
    }
}

export default Teste