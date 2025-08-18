import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [input, setInput] = useState("")
  const [tasks, setTasks] = useState<string[]>([]);

  const[editItem, setEditItem] = useState({
    enabled: false,
    index: 0
  })

  const [buttonText, setButtonText] = useState("ADICIONAR")

  const [concluidos, setConcluidos] = useState<string[]>([])

  useEffect(()=>{
    const tarefasSalvas = localStorage.getItem("alexDev@test2")
    if(tarefasSalvas)
      setTasks(JSON.parse(tarefasSalvas))

    const concluidosSalvos = localStorage.getItem("concluidoskey")
    if(concluidosSalvos)
      setConcluidos(JSON.parse(concluidosSalvos))

    console.log(concluidos)
  },[])

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
      localStorage.setItem("alexDev@test2", JSON.stringify(novasTasks))
      setInput("")
      editItem.enabled = false
      setButtonText("ADICIONAR")
      return
    }
    
    setTasks([...tasks, input])
    localStorage.setItem("alexDev@test2", JSON.stringify([...tasks, input]))

    setConcluidos([...concluidos])
    setInput("")
  }

  function handleRemove(item: string, index: number)
  {
    const novaLista = tasks.filter(i => i !== item)
    setTasks(novaLista)
    localStorage.setItem("alexDev@test2", JSON.stringify(novaLista))

     const indexRemoved = concluidos.filter((_, i) => i !== index)
     setConcluidos(indexRemoved)
     localStorage.setItem("concluidoskey", JSON.stringify(indexRemoved))
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

    if(concluidos){
      const newList = [...concluidos]
      newList[i] = value;
      setConcluidos(newList)
      localStorage.setItem("concluidoskey", JSON.stringify(newList))
    }

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
                    <input checked={concluidos[index] ? true : false} onChange={(e) => desabilitarTask(index, e.target.checked)}
                    type="checkbox" />
                    <span style={{color: concluidos[index]? "#ccc" : "#000"}} className='item-txt'>{item}</span>
                    
                    <button style={{display: concluidos[index]? "none" : "block"}} onClick={()=> handleRemove(item, index)}>Remover</button>
                    <button style={{display: concluidos[index]? "none" : "block"}} onClick={()=> handleEdit(index)}>Editar</button>
                  </div>
                ))
              }
              

            </div>

            <div className="limpar-concluidas">
              <button>Limpar concluidas</button>
              <div className="confirmar">
                <h3>Confirmar?</h3>
                <button>Sim</button>
                <button>Não</button>
              </div>
            </div>

          </section>

        </div>

    </div>
  )
}

export default App
