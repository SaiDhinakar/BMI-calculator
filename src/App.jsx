import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="contanier">
        <div className="box">
          <img src="src/assets/bmi.jpg" alt="" width={300} height={400}/>
        </div>
        <div className="data">
          <h2>BMI Calculator</h2>
            <div>
              <label htmlFor="height">Height</label>
              <input type="text" id="height" />
              <label htmlFor="weight">Weight</label>
              <input type="text" id="weight" />
              <button>Calculate</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
