import { useState } from 'react'
import './App.css'

function App() {

  const [input, setInput] = useState("")
  const [tasks, setTasks] = useState([
    "Estudar react",
    "Estudar eletrodinâmica",
    "Estudar desenvolvimento de jogos"
  ]);

  function handleAdd()
  {
    if(!input){
      alert("Primeiro entre com a tarefa")
      return
    }
    
    setTasks([...tasks, input])
    setInput("")
  }

  return (
    <div>

        <div className="content-box">

          

          <section className='content-main'>

            <div className="content-head">
              <h1>Lista de Tarefas</h1>

              <div className='input-button'> 
                <input 
                  type="text" 
                  value={input}
                  onChange={(e)=> setInput(e.target.value)}
                  placeholder='Digite a tarefa'
                />

                <button onClick={handleAdd}>ADICIONAR</button>
              </div>
             
            </div>
            
            <div className="list-area">

              {
                tasks && tasks.map((item, index) => (
                  <div className="item" key={index}>
                    <span className='item-txt'>{index + 1}. {item}</span>
                    <button>Remover</button>
                    <button>Editar</button>
                  </div>
                ))
              }
              

            </div>

          </section>

        </div>

    </div>
  )
}

export default App
