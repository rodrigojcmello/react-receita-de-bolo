import React, { Component } from 'react';
import Mensagem from './Mensagem.jsx';
import $ from 'jquery';
require('./BatePapo.css');

export default class BatePapo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {"usuario": "Rodrigo Mello", "texto": 'Olá tudo bem?'},
                {"usuario": "Rodrigo Mello", "texto": 'Boa tarde!'},
                {"usuario": "Rodrigo Mello", "texto": 'Como vai?'},
                {"usuario": "Rodrigo Mello", "texto": 'Como vai?'},
                {"usuario": "Rodrigo Mello", "texto": 'Como vai?'}
            ]
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.socketOn = this.socketOn.bind(this);
    }
    socketOn(msg) {
        this.setState({"data":[ {"usuario": 'rodrigo', "texto": msg}]});
    }
    componentDidMount() {
        document.title = 'React e Socket.io';
        var socket = io.connect("http://localhost:3000");
        const BatePapo = this;
        socket.on('chat message', function(msg) {
            BatePapo.socketOn(msg);
        });
    }
    handleSubmit(e) {
        e.preventDefault();

        var socket = io.connect("http://localhost:3000");
        socket.emit('chat message', $('#mensagem').val());



        $('#mensagem').val('');
    }
    render() {
        console.log(this.state);
        var mensagemNode = this.state.data.map(function(mensagem, i) {
            return (
                <Mensagem key={i} data={mensagem} />
            );
        });
        return (
            <div>
                <ul id="messages">
                    {mensagemNode}
                </ul>
                <form action="" onSubmit={this.handleSubmit}>
                    <input id="mensagem" name="mensagem" autocomplete="off" />
                    <button>Send</button>
                </form>
            </div>
        );
    }
}
