import { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import './App.scss';
import Home from './Home/Home';
import { userinfo } from './Redux/action';
import { location } from './Redux/action';
import Gryffindor from './gryffindor/Gryffindor';
import Slytherin from './Slytherin/Slytherin';
import Hufflepuff from './Hufflepuff/Hufflepuff';
import Ravenclaw from './Ravenclaw/Ravenclaw';

function App() {;
	const dispatch = useDispatch();
	useEffect(()=> {
		dispatch(location(window.document.location.pathname));
		fetch(`http://hp-api.herokuapp.com/api/characters`)
		.then(stream =>stream.json())
		.then(results => dispatch(userinfo(results)))
	},[ dispatch ]);
	const local = useSelector((state) => state.localReducer);
	return (
		<div className="App">
			{ (local === '/Home' || local === '/')  && <Home /> }
			{ local === '/Gryffindor' && <Gryffindor /> }
			{ local === '/Slytherin' && <Slytherin /> }
			{ local === '/Hufflepuff' && <Hufflepuff /> }
			{ local === '/Ravenclaw' && <Ravenclaw /> }
		</div>
	);
}

export default App;
