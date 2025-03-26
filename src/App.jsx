import data from "./data"
import PersonList from "./PersonList"
import { useState } from "react"
import "./index.css"

const App = () => {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className='container'>
        <h3>Birthday's today: {people.length}</h3>
        <PersonList people={people} />
        <button
          type='button'
          className='btn btn-block'
          onClick={() => setPeople([])}
        >
          Clear
        </button>
      </section>
    </main>
  )
}
export default App
