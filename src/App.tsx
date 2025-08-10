import { useState } from 'react'
import './App.css'

function App() {

  const [input, setInput] = useState("")

  function handleAdd()
  {
    if(!input){
      alert("Primeiro entre com a tarefa")
      return
    }
    console.log(input)
  }

  return (
    <div>

        <div className="content-box">

          <h1>Lista de Tarefas</h1>

          <section className='content-main'>

            <input 
              type="text" 
              value={input}
              onChange={(e)=> setInput(e.target.value)}
            />

            <button onClick={handleAdd}>Adicionar tarefa</button>

            <div className="list-area">

              <div className="item">
                <span>1. Item</span>
                <button>Remover</button>
                <button>Editar</button>
              </div>

            </div>

          </section>

        </div>

    </div>
  )
}

export default App
