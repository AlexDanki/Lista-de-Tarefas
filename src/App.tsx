import { useState } from 'react'
import './App.css'

function App() {

  const [input, setInput] = useState("")
  const [tasks, setTasks] = useState([]);

  const[editItem, setEditItem] = useState({
    enabled: false,
    index: 0
  })

  const [buttonText, setButtonText] = useState("ADICIONAR")

  const [concluidos, setConcluidos] = useState([])

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
    setConcluidos([...concluidos, 0])
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

  function desabilitarTask(i: number, ischecked: boolean)
  {

    let value = 0;

    if(ischecked ){
        value =  1
    }

    const newList = [...concluidos]
    newList[i] = value;
    setConcluidos(newList)
    console.log(newList);
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
                    <input onChange={(e) => desabilitarTask(index, e.target.checked)}
                    type="checkbox" />
                    <span className='item-txt'>{item}</span>
                    
                    <button style={{display: concluidos[index]? "none" : "block"}} onClick={()=> handleRemove(item)}>Remover</button>
                    <button style={{display: concluidos[index]? "none" : "block"}} onClick={()=> handleEdit(index)}>Editar</button>
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
