import React, { Component } from 'react'

class Conteudo extends Component {
    render() {
        return (
            <div id={this.props.id} className={!this.props.container ? 'container' : ''}>
                {this.props.children}
            </div>
        );
    }
}

export default Conteudo