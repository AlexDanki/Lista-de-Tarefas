import { useState } from 'react'
import './App.css'

function App() {

  const [input, setInput] = useState("")
  const [tasks, setTasks] = useState([
    "Estudar react",
    "Estudar eletrodinâmica",
    "Estudar desenvolvimento de jogos"
  ]);

  const[editItem, setEditItem] = useState({
    enabled: false,
    index: 0
  })

  const [buttonText, setButtonText] = useState("ADICIONAR")

  function handleAdd()
  {
    if(!input){
      alert("Primeiro entre com a tarefa")
      return
    }

    if(editItem.enabled){
      const novasTasks = [...tasks]
      novasTasks[editItem.index] = input
      setTasks(novasTasks)
      setInput("")
      editItem.enabled = false
      setButtonText("ADICIONAR")
      return
    }
    
    setTasks([...tasks, input])
    setInput("")
  }

  function handleRemove(item: string)
  {
    const novaLista = tasks.filter(i => i !== item)
    setTasks(novaLista)
  }

  function handleEdit(index: number){
    setInput(tasks[index])
    setEditItem({
      enabled: true,
      index:index
    })
    setButtonText("SALVAR")
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

                <button onClick={handleAdd}>{buttonText}</button>
              </div>
             
            </div>
            
            <div className="list-area">

              {
                tasks && tasks.map((item, index) => (
                  <div className="item" key={index}>
                    <input type="checkbox" />
                    <span className='item-txt'>{item}</span>
                    <button onClick={()=> handleRemove(item)}>Remover</button>
                    <button onClick={()=> handleEdit(index)}>Editar</button>
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
