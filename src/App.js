import { useState } from 'react';
import './styles.css';

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

	return (
		<div className="App">
			<Form onAdd={addHandler} />
			<List items={items} onDelete={deleteHandler} onChecked={toggleHandler} />
		</div>
	);
}
const Form = ({ onAdd }) => {
	const [description, setDescription] = useState('');
	const [quantity, setQuantity] = useState('1');
	const addHandler = (e) => {
		e.preventDefault();
		const itemAdded = {
			id: Date.now(),
			description,
			quantity,
			done: false
		};
		onAdd(itemAdded);
		setQuantity('1');
		setDescription('');
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
function List({ items, onDelete, onChecked }) {
	return (
		<div className="list">
			<ul>
				{items.map((item) => (
					<li>
						<input
							type="checkbox"
							value={items.done}
							onChange={() => onChecked(item.id)}
						/>
						<span style={item.done ? { textDecoration: 'line-through' } : {}}>
							{item.quantity} {item.description}
						</span>
						<button onClick={() => onDelete(item.id)}>❌</button>
					</li>
				))}
			</ul>
		</div>
	);
}
