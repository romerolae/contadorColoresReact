import { useState, useEffect } from 'react';
import './App.css';

const colors = [
	'#845EC2',
	'#D65DB1',
	'#FF6F91',
	'#FF9671',
	'#FFC75F',
	'#F9F871',
];

const getRandomElement = (arr) => {
	const indexRandom = Math.floor(Math.random() * arr.length);
	return arr[indexRandom];
};

function App() {
	const [isShown, setisShown] = useState('password');

	const [count, setCount] = useState(0);

	const [color, setColor] = useState();

	const showPass = () => {
		if (isShown === 'password') {
			setisShown('text');
		} else {
			setisShown('password');
		}
	};

	const plusCount = () => {
		setCount(count + 1);
	};

	const resetCount = () => {
		setCount(0);
	};

	const minusCount = () => {
		setCount(count - 1);
	};

	useEffect(() => {
		const randomColor = getRandomElement(colors);
		setColor(randomColor);
	}, [count]);

	return (
		<div className="App" style={{ backgroundColor: color }}>
			<div className="card">
				<div className="password">
					<label htmlFor="">Contraseña</label>
					<input type={isShown} />
					<button onClick={showPass}>
						{isShown === 'password' ? 'Show' : 'Hide'} Password
					</button>
					<hr />
				</div>

				<div className="counter">
					<p>Counter</p>
					<h1>{count}</h1>
					<div className="btns">
						<button onClick={plusCount}> + Increment</button>
						<button onClick={resetCount}> Reset</button>
						<button onClick={minusCount}>- Decrement</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
