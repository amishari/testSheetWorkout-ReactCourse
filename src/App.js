import { useState } from "react";
import "./styles.css";
import { Form } from "./componenets/Form";
import { List } from "./componenets/List";
import { Stats } from "./componenets/Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function addHandler(item) {
    setItems((items) => [...items, item]);
  }
  function deleteHandler(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function toggleHandler(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  }
  function clearList() {
    setItems([]);
  }

  return (
    <div className="App">
      <Form onAdd={addHandler} />
      <List
        items={items}
        onDelete={deleteHandler}
        onChecked={toggleHandler}
        onClearList={clearList}
      />
      <Stats items={items} />
    </div>
  );
}
