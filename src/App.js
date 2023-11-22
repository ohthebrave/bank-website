import SearchBar from "./components/SearchBar";
import Form from "./components/Form";
import TransactionsTable from "./components/TransactionsTable";
import { useState, useEffect } from "react";
import data1 from "./data/db.json";

function App() {
  const [lists, setList] = useState([]);

  const updateTable = (obj) => {
    // Fetch data again to update the table after a successful POST

    let existingLists = data1.transactions;
    let lastId = existingLists.pop().id;
    let newId = lastId + 1;
    obj.id = newId;

    let newList = [...data1.transactions, obj];
    setList(newList);
  };

  useEffect(() => {
    setList(data1.transactions);
  }, []);

  return (
    <div className="App">
      <h1 className="header">The Royal Bank of Flatiron</h1>
      <SearchBar lists={lists} setList={setList} />
      <Form updateTable={updateTable} />
      <TransactionsTable lists={lists} />
    </div>
  );
}

export default App;
