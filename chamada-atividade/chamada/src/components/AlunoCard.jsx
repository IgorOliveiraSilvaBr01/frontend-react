import './AlunoCard.css';

export default function AlunoCard({ nome, curso, presente, aoAlternarPresenca}){
    return(
        // `` - template string
        <article className={`aluno-card ${presente ? 'card-presente' : 'card-ausente'}`}>
            <div>
                <h2>{ nome }</h2>
                <p>{ curso }</p>
                <div>
                    <div className='status'>
                        <p>
                            Status: {''}
                            <strong>
                                {presente ? 'Presente' : 'Ausente'}
                            </strong>
                        </p>
                        <button onClick={aoAlternarPresenca}>
                            {presente ? 'Marcar ausência' : 'Marcar presença'}
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}