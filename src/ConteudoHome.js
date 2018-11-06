import React, { Component, Fragment } from 'react'

import './content-about.css'
import Button from './button'
import Link from './link'
import Eu from './images/edmar.jpg'
import curri from './curriculum-vitae.pdf'

class ConteudoHome extends Component {
    render() {
        return (
            <Fragment>
                <div id="content-about">
                    <div className="row ">
                    <div className="col-sm-1  "/>
                        <div className="col-sm-4 ">
                            <p><br/></p>
                            <p><br/></p>
                            <p><br/></p>
                            <p><br/></p>
                            <p><br/></p>
                            <div > <img src={Eu}width="500" height="500" alt="Edmar Fernandes Junior" /> </div>
                            <p className="sr-1">Sou Edmar Fernandes Junior, formando em Engenharia da Computação na Universidade Federal Tecnológica do Paraná, nasci em Pitangueiras - SP, moro atualmente em Cornélio Procópio - PR</p>
                            <br/>
                            <Link href={curri} target="_blank" download="curriculo" className="sr-4">
                                <Button 
                                    id="btn-curriculo"
                                    label="CURRICULO"
                                    type="white"
                                    sr="sr-2">
                                </Button>
                             </Link>
                        </div>
                        
                        <div className="col-sm-2 ">
                           
                            
                        </div>
                        <div className="col-sm-4  ">
                            <p><br/></p>
                            <p><br/></p>
                            <p><br/></p>
                            <h2 className="sr-2">Edmar Fernandes Junior</h2>
                            <h3>Interesses</h3>
                            <p className="sr-1">- Desevolvimento de jogos</p>
                            <p className="sr-1">- Pixel Art</p>
                            <p className="sr-1">- Ilustrações</p>
                            <p className="sr-1">- Artes</p>
                            <br/>
                            <h3>Idiomas</h3>
                            <p className="sr-1">- Português - Nativo</p>
                            <p className="sr-1">- Ingles - Avançado</p>
                            <br/>
                            <h3>Formação</h3>
                            
                            <p className="sr-1">- 2010/Colégio Espaço Livre - Ensino Médio</p>
                            <br/>
                            <h3>Atividades</h3>
                            <p className="sr-1">- Estudante Universitário</p>
                            <p className="sr-1">- Estagiário</p>
                            
                            
                            
                        </div>
                    </div>
                    <br/>
                </div>
            </Fragment>
        );
    }
}

export default ConteudoHome