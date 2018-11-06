import React, { Component, Fragment } from 'react'

import './content-about.css'
import Button from './button'
import Link from './link'


class ConteudoContato extends Component {
    render() {
        return (
            <Fragment>
                <div id="content-about">
                    <div className="row ">
                         <div className="col ">
                             <br/>
                             <h2>ENTRE EM CONTATO</h2>
                         </div>
                         <div className="container ">
                         <div className="col-lg-9 container  ">  
                                <div ><Link href="https://www.facebook.com/soubatima" target="_blank" className="sr-4">
                                <Button  
                                    id="btn-curriculo"
                                    label="FACEBOOK"
                                    type="white"
                                    sr="sr-2">
                                </Button>
                             </Link>  </div>

                             <div ><Link href="https://www.instagram.com/edrato" target="_blank" className="sr-4">
                                <Button  
                                    id="btn-curriculo"
                                    label="INSTAGRAM"
                                    type="white"
                                    sr="sr-2">
                                </Button>
                             </Link>  </div>

                              <div><Link href="https://www.deviantart.com/edrato" target="_blank" className="sr-4">
                                <Button 
                                    id="btn-curriculo"
                                    label="DEVIANTART"
                                    type="white"
                                    sr="sr-2">
                                </Button>
                             </Link>  </div>
                             </div>     
                             
                             </div>
                            
                            
                            
                        
                    </div>
                    <br/>
                </div>
            </Fragment>
        );
    }
}

export default ConteudoContato