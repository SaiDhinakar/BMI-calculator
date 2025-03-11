import { useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [BMI, setBMI] = useState("");
  const [error, setError] = useState("");

  const calculateBMI = () => {
    // Reset error and BMI states
    setError("");
    setBMI("");

    // Check if inputs are empty
    if (!height || !weight) {
      setError("Please enter both height and weight");
      return;
    }

    // Check if inputs are valid numbers
    if (height <= 0 || weight <= 0) {
      setError("Height and weight must be greater than 0");
      return;
    }

    try {
      // Convert height to meters (assuming input is in cm)
      const heightInMeters = height / 100;
      // Calculate BMI
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      
      // Check if the result is a valid number
      if (isNaN(bmiValue) || !isFinite(bmiValue)) {
        setError("Invalid calculation result");
        return;
      }

      setBMI(bmiValue);
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
          {BMI && <p id="result">Your BMI value is {BMI}</p>}
        </div>
      </div>
    </>
  );
}

export default App;
