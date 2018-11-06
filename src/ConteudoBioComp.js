import React, { Component, Fragment } from 'react'

import './content-bio.css'
import Button from './button'
import Link from './link'


class ConteudoBioComp extends Component {
    render() {
        return (
            <Fragment>
                <div id="content-bio">
                    <div className="row ">
                    <div className="col-sm  "></div> 
                    <div className="col-sm-4  ">
                            <p><br/></p>
                            <p><br/></p>
                         
                           
                            <h3>Biografia</h3>
                            <p className="sr-1">Em julho de 2011, iniciei o curso de engenharia da computação na Universidade Tecnológica Federal
                                 do Paraná (UTFPR), onde entrei para o laboratório de games. Durante os anos de laboratorio, participei das três primeiras
                                 GAMEJAMs da UTFPR, onde fui responsável pelo designe grafico nas três ocasiões, levando o primeiro lugar em duas delas.</p>
                            
                            
                            
                        </div> 
                           
                        <div className="col-sm-2  "></div> 
                       
                        <div className="col-sm-4  ">
                            <p><br/></p>
                            <p><br/></p>
                          
                           
                            <h3>Profissão</h3>
                            <p className="sr-1">Computadores, jogos e arte sempre fizeram parte da minha vida. Sempre que lembro do meu antigo SNES, me 
                                causa uma deliciosa nostalgia, onde apenas ouvir a musica de certos jogos ja me da um arrepio na alma. A muito tempo
                                venho me interessando na área, onde a cada dia mais venho evoluindo minhas habilidades.
                            </p>
                            
                            
                            
                        </div>
                        <div className="col-sm  "></div>
                        
                    </div>
                    <div classname="container ">
                            <div classname="row">
                            <br/>    
                                        <div classname="col-md-auto ">
                                            <Link href="https://github.com/edmarfjr"className="">
                                                <Button 
                                                    id="btn-git"
                                                    label="GITHUB"
                                                    type="white"
                                                    sr="sr-2">
                                                </Button>
                                            </Link>
                                        </div>   
                                                 
                                </div>
                        </div>
                        <br/>
                </div>
            </Fragment>
        );
    }
}

export default ConteudoBioComp