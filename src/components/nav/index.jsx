import './index.css'

export function Nav({nome, telefone}){
    return(
        <div className='nav'>
            <div className="nome"><strong>{nome}</strong></div>
            <div className="tel"><strong>{telefone}</strong></div>
        </div>
    )
}