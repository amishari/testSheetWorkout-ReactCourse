import { useState } from "react";

export const Form = ({ onAdd }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("1");
  const addHandler = (e) => {
    e.preventDefault();
    const itemAdded = {
      id: Date.now(),
      description,
      quantity,
      done: false,
    };
    onAdd(itemAdded);
    setQuantity("1");
    setDescription("");
  };

  return (
    <form className="add-form" onSubmit={addHandler}>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
};
