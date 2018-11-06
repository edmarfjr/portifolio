import React, { Component } from 'react'

//import './section.css'

class Sessao extends Component {
    render() {
        return (
            <section id={this.props.id} style={this.props.styleSection}>
                {this.props.children}
            </section>
        );
    }
}

export default Sessao