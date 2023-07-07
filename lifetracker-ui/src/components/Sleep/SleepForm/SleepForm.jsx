import { useState } from "react";
import "./SleepForm.css";
import apiClient from "../../../../../services/apiClient";

export default function SleepForm({ setAppState, appState }) {
  const [sleepForm, setSleepForm] = useState({
    name: "",
    quantity: 1,
    calories: 0,
    category: "",
    imageUrl: "",
  });
  const [errors, setErrors] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setSleepForm({ ...event, [event.target.name]: event.target.value });
  };

  async function saveRecord(event) {
    event.preventDefault();
    setErrors((error) => ({ ...error, regForm: null }));
    setIsLoading(true);
    const { data, error } = await apiClient.recordSleep({
      name: sleepForm.name,
      category: sleepForm.category,
      quantity: sleepForm.quantity,
      calories: sleepForm.calories,
    });
    if (error) setErrors((e) => ({ ...e, regForm: error }));
    if (data?.sleep) {
      setAppState(...appState, { sleep: data.sleep });
    }
    setIsLoading(false);
  }
  return (
    <div className="sleep-form">
      <h1>Record Sleep</h1>
      <div className="sleep-form">
        <form className="card">
          <input
            className="form-input"
            type="text"
            name="name"
            value={sleepForm.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <select className="form-input" required>
            <option defaultValue="selected">Select a category</option>
            <option value="snack">Snack</option>
            <option value="beverage">Beverage</option>
            <option value="food">Food</option>
          </select>
          <div className="box">
            <div className="sub-box">
              <label htmlFor="quantity">Quantity</label>
              <input
                className="form-input"
                type="number"
                min={1}
                max={100}
                name="quantity"
                value={sleepForm.quantity}
                onChange={handleChange}
                required
              />
            </div>

            <div className="sub-box">
              <label htmlFor="calories">Calories</label>
              <input
                className="form-input"
                type="number"
                min={0}
                max={100000}
                step={10}
                name="calories"
                value={sleepForm.calories}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <input
            className="form-input"
            type="text"
            name="imageUrl"
            value={sleepForm.imageUrl}
            placeholder="Image Url"
            onChange={handleChange}
          />
          <button
            className="submit-registration"
            disabled={isLoading}
            onClick={saveRecord}
          >
            {isLoading ? "Loading... " : "Save Record"}
          </button>
        </form>
      </div>
    </div>
  );
}