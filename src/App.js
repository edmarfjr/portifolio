import React, { Component,Fragment } from 'react';
import Teste from './Teste'

import './App.css';
import Sessao from './Sessao';
import Conteudo from './Conteudo';
import ConteudoHome from './ConteudoHome';
import ConteudoBioComp from './ConteudoBioComp';
import ConteudoHab from './ConteudoHab';
import ConteudoPortifolio from './ConteudoPortifolio';
import ConteudoContato from './conteudoContato';
import Menu from './Menu';
import menu from './menuu';

class App extends Component {
  render() {
    
    return (
      <Fragment>
      <Menu itemsMenu={menu}/>
      <Sessao id="home">
        <Conteudo id="content-home">
          <ConteudoHome></ConteudoHome>
        </Conteudo>
      </Sessao>
      <Sessao id="habilidades">
        <Conteudo id="content-hab">
          <ConteudoHab></ConteudoHab>
        </Conteudo>
      </Sessao>
      <Sessao id="portifolio">
        <Conteudo id="content-port">
          <ConteudoPortifolio></ConteudoPortifolio>
        </Conteudo>
      </Sessao>
      <Sessao id="biografia">
        <Conteudo id="content-bioc">
          <ConteudoBioComp></ConteudoBioComp>
        </Conteudo>
      </Sessao>
      <Sessao id="contato">
        <Conteudo id="content-contat">
          <ConteudoContato></ConteudoContato>
        </Conteudo>
      </Sessao>
      
    </Fragment>
    );
  }
}

export default App;
