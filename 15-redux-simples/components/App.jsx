import React from 'react';
import AdicionarTarefa from './AdicionarTarefa';
import TarefaListaAtiva from './TarefaListaAtiva';
import BotaoAtivo from './Botao';

const App = () => (
    <div>
        <AdicionarTarefa />
        <TarefaListaAtiva />
        <BotaoAtivo />
    </div>
);

export default App;
