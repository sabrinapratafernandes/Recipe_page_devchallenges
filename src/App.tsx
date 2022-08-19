import React from 'react';
import RECEITAS from './data/receitas';


function App() {
  return (
    <div className="App">
      {
        RECEITAS.map(item => (
          <div>
            {item.nome}
            <div>
              <h3>Etapas</h3>
              <ul>
                {
                  item.etapas.map(etapa => (
                    <li>
                      {etapa.nome}
                      <ol>
                        {
                          etapa.passos.map(passo => (
                            <li>
                              <input type={'checkbox'} />
                              {passo}
                            </li>
                          ))
                        }
                      </ol>
                    </li>
                  ))
                }
              </ul>
              <h3>Instruções</h3>
              <ol>
                {
                  item.instrucoes.map(instrucao => (
                    <li>
                      {instrucao}
                    </li>
                  ))
                }
              </ol>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default App;
