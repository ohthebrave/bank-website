import { useState } from "react";
// import data1 from '../data/db.json';

const Form = ({ updateTable }) => {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [id, setId] = useState("");

  const obj = {
    date: date,
    description: description,
    category: category,
    amount: amount,
    id: id,
  };

  function handleSubmit(e) {
    e.preventDefault();
    obj.date = date;
    obj.description = description;
    obj.category = category;
    obj.amount = amount;
    updateTable(obj);
  }



  return (
    <div className="form-input">
      <form className="input" onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          name=""
          id=""
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          placeholder="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <div className="btn">
          <button type="submit">Add Transaction</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
