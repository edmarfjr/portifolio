import React, { Component, Fragment } from 'react'
import './contentPort.css'
import space from './images/spaceHeroin.gif'
import mock from './images/mockuparknek.png'
import spell from './images/SpellSword.gif' 
import volca from './images/volca.jpg' 
import balder from './images/balder.jpg'
import oc from './images/oc.jpg' 

class ConteudoPortifolio extends Component {
    
    render() {
        return (
            <Fragment>
                <div id="content-port">
                    <div className="row ">
                            <div className="col-lg-9 bio">
                                <div >
                                    <p><br/></p>
                                    <p><br/></p>
                                    <p><br/></p>
                                </div>
                              </div>
                        
                        <div className="col-sm-4 ">
                            
                        </div>
                        <div className="col-sm-4 ">
                            <h2>Portifólio</h2>
                        </div>
                        <div className="col-sm-4 ">
                            
                        </div>

                        <div>
                            
                            </div>
                            <div >
                                
                            <div className="col-lg-9 container wrap center ">  
                                <div className="itemPort grow0 "> <img src={space} />  </div>
                                <div className="itemPort grow0">  <img src={mock} /> </div>
                                <div className="itemPort grow0">  <img src={spell} /></div>
                                <div className="itemPort grow0">  <img src={volca} /> </div>
                                <div className="itemPort grow0">  <img src={balder} /></div>
                                <div className="itemPort grow0">  <img src={oc} /></div>
                            </div>
                            </div>
                            <div className="col-sm-4 ">
                                
                        </div>

                    </div>
                </div>
            </Fragment>
        );
    }
}

export default ConteudoPortifolio