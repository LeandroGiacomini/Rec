import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Nav } from '../../components/nav';
import './index.css'

//Eu abri essa observação para explicar o que optei por fazer. 
//Eu ainda estou perdido na questão de linkar uma página e passar suas variáveis, mas creio ter melhorado minha noção sobre
//o uso dos states, apesar de eu não saber explicar exatamente a função de cada elemento.
//O jeito que encontrei de fazer a recuperação, foi usando o "getElement" para
//desaparecer o formulário e dar a impressão de que houve uma mudança de página.

export function Form(){


    const [varName, setName] = useState('Coloque seu nome');
    const [varTel, setTel] = useState('Coloque seu telefone');
    const [pessoas, setPessoa] = useState([]);

    function handleAddNav(){
        const pessoa = {
            name: varName,
            tel: varTel
        };
        setPessoa(prevState => [...prevState, pessoa]);

        document.getElementById("sumir").innerHTML = ""

    }


    return(
        <>
            {
            pessoas.map(pessoa => (
                <Nav
                    nome={pessoa.name}
                    telefone={pessoa.tel}
                />
            ))
            }
            <div id='sumir'>
                <div className="form">
                    <div className="ajuste">

                        <input 
                            type='text'
                            placeholder='Seu nome'
                            onChange={e => setName(e.target.value)}>
                        </input>

                        <input 
                            type='text'
                            placeholder='Seu telefone'
                            onChange={e => setTel(e.target.value)}>
                        </input>

                        <button type='button' onClick={handleAddNav}>Adicionar</button>
            
                    </div>
                </div>
            </div>
        
        </>
        
    )
}