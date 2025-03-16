import { useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [BMI, setBMI] = useState("");
  const [error, setError] = useState("");
  const [BmiStatus, setBmiStatus] = useState("");

  const calculateBMI = () => {
    setError("");
    setBMI("");

    if (!height || !weight) {
      setError("Please enter both height and weight");
      return;
    }

    if (height <= 0 || weight <= 0) {
      setError("Height and weight must be greater than 0");
      return;
    }

    try {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(bmiValue);

      if (bmiValue < 18.5){
        setBmiStatus("Underweight");
      }else if(bmiValue >= 18.5 && bmiValue < 24.9){
        setBmiStatus("Normal Weight");
      }else if(bmiValue >= 25 && bmiValue < 29.9){
        setBmiStatus("Overweight");
      }else{
        setBmiStatus("Obese")
      }

      
      if (isNaN(bmiValue) || !isFinite(bmiValue)) {
        setError("Invalid calculation result");
        return;
      }

    } catch (err) {
      setError("An error occurred during calculation");
    }
  };

  const handleInput = (e, setter) => {
    const value = e.target.value;
    if (value === "" || (Number(value) >= 0 && Number(value) <= 999)) {
      setter(value);
      setError("");
    }
  };

  return (
    <>
      <div className="contanier">
        <div className="box">
          <img src="src/assets/bmi.jpg" alt="" width={300} height={400} />
        </div>
        <div className="data">
          <h2>BMI Calculator</h2>
          {error && <p id="error">{error}</p>}
          <label htmlFor="height">Height (cm)</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => handleInput(e, setHeight)}
          />
          <label htmlFor="weight">Weight (kg)</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => handleInput(e, setWeight)}
          />
          <button onClick={calculateBMI}>Calculate</button>
          {BMI && (
            <div className="result">
              <p>Your BMI value is {BMI}</p>
              <p>Status : {BmiStatus}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
