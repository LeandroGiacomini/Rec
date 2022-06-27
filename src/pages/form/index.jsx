import { Link } from "react-router-dom";
import './index.css'

export function Form(){
    return(
        <div className="form">
            <div className="ajuste">
            <input 
            type='text'
            placeholder='Digite seu nome'
            onChange=''></input>

            <input 
            type='text'
            placeholder='Digite seu nome'
            onChange=''></input>

            <button type='button'><Link to='/home'>Entrar</Link></button>
            </div>
        </div>
    )
}