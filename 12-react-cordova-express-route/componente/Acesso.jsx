import React, { Component } from "react";
import { Link } from "react-router";

export default class extends Component {
    componentWillMount() {
        global.transComp = true;
        global.transName = "swipe-left";
    }
    render() {
        return (
            <div className="tela">
                <h1>2 Acesso!</h1>
                <li><Link to="/tag">Voltar</Link></li>
            </div>
        );
    }
}
