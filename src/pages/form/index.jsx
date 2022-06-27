import { useState, Effect } from 'react'
import { Nav } from '../../components/nav';
import './index.css'

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
        let div = ''
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
        <div className="form">
            
            <div className="ajuste">

            <input 
            type='text'
            placeholder='Seu nome'
            onChange={e => setName(e.target.value)}></input>

            <input 
            type='text'
            placeholder='Seu telefone'
            onChange={e => setTel(e.target.value)}></input>

            <button type='button' onClick={handleAddNav}>Butão</button>

            </div>
        </div>

        
        </>
        
    )
}