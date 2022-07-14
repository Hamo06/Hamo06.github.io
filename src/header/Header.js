import './Header.scss';
import { useDispatch } from 'react-redux';
import photter from '../assets/headerPhoto/photter.jpeg';
import voldmord from '../assets/headerPhoto/voldmord.jpg';
import { userchange } from '../Redux/action';

function Header () {
	const dispatch = useDispatch();
	let id = null;
	return (
		<div className='header'>
			<div className='logo_phorrer'>
				<a href='Home'><img src={photter} /></a>
			</div>
			<div className='nav_bar'>
				<a href='Gryffindor'>Gryffindor</a>
				<a href='Slytherin'>Slytherin</a>
				<a href='Hufflepuff'>Hufflepuff</a>
				<a href='Ravenclaw'>Ravenclaw</a>
				<input type='text' placeholder='Search...' onChange={(e) => {
					if(id !== undefined) {
						clearTimeout(id)
					}
					id =  setTimeout(() => {
						dispatch(userchange(e.target.value))
					}, 500);
					
				}} />
			</div>
			<div className='logo_voldmord'>
				<img src={voldmord} />
			</div>

		</div>
	)
}

export default Header