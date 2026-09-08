import { useState } from "react";
import AlunoCard from "./components/AlunoCard";
import './App.css';

export default function App(){
  const [alunos, setAlunos] = useState([
  
  {
    id: 1,
    nome: 'Ana Souza',
    curso: 'React Básico',
    presente: true 
  },

  {
    id: 2,
    nome: 'Bruno Lima',
    curso: 'React Básico',
    presente: true 
  },

  {
    id: 3,
    nome: 'Diego Alves',
    curso: 'React Básico',
    presente: true
  },

  {
    id: 4,
    nome: 'Carla Mendes',
    curso: 'React Básico',
    presente: true 
  },

  ]);

  function alternarPresenca(id){
    const alunosAtualizados = alunos.map((aluno) => {
      if(aluno.id === id){
        return {
          ...aluno, presente: !aluno.presente
        };
      }

      return aluno;
    });

    setAlunos(alunosAtualizados);
  }

  const totalPresentes = alunos.filter((aluno) => aluno.presente).length;

  const totalAusentes = alunos.filter((aluno) => !aluno.presente).length;

  // const totalAlunos = aluno.filter((aluno) => aluno.presente && !aluno.presente).length;

  return(
    <main className="container">
        <header className="cabecalho">
          <h1>Chamada Facil</h1>
          <p>Controle de Presença - React Básico</p>
        </header>

        <section className="resumo">
          <div className="resumo-card">
            <span>Total</span>
            <strong>{alunos.length}</strong>
          </div>
          <div className="resumo-card presente">
            <span>Presentes</span>
            <strong>{totalPresentes}</strong>
          </div>
          <div className="resumo-card ausentes">
            <span>Ausentes</span>
            <strong>{totalAusentes}</strong>
          </div>

          <section className="lista-alunos">
            {alunos.map((aluno) => (
              <AlunoCard
              key={aluno.id}
              nome={aluno.nome}
              curso={aluno.curso}
              presente={aluno.presente}
              aoAlternarPresenca={() => alternarPresenca(aluno.id)}
              />
            ))}
          </section>
        </section>
    </main>
  )
}