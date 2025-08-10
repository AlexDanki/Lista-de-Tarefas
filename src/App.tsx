
import './App.css'

function App() {

  return (
    <div>

        <div className="content-box">

          <h1>Lista de Tarefas</h1>

          <section className='content-main'>

            <input type="text" />
            <button>Adicionar Tarefa</button>

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
