import './Popup.scss';
import { useDispatch, useSelector } from 'react-redux';
import person from '../assets/GryffindorPhoto/personred.svg';
import mammal from '../assets/GryffindorPhoto/mammal.svg';
import { popupstatus } from '../Redux/action';

function Popup () {
	const pop = useSelector((state) => state.popupReducer);
	const dispatch = useDispatch()
	return (
		<div className='popup_main' onClick={ e => {
			if(e.target.tagName === 'SPAN' || e.target.className === 'popup_main'){
				dispatch(popupstatus(false))
			}
		}} >
			<div className='popup_user' >
				<div className='popup_user_img'>
					<img src={pop.image ? pop.image : pop.gender ==='male' ? person : mammal } />
				</div>
				<div className='popup_user_info'>
					<div>
						<h3>Name</h3>
						<p>actor</p>
						<p>alive</p>
						<p>ancestry</p>
						<p>dateOfBirth</p>
						<p>eyeColour</p>
						<p>gender</p>
						<p>hairColour</p>
						<p>hogwartsStaff</p>
						<p>hogwartsStudent</p>
						<p>house</p>
						<p>patronus</p>
						<p>species</p>
						<p>wizard</p>
						<p>yearOfBirth</p>
					</div>
					<div>
						<h3>{pop.name}</h3>
						<p>{pop.actor ? pop.actor : "undefined"}</p>
						<p>{pop.alive ? `${ pop.alive}` : "undefined"}</p>
						<p>{pop.ancestry ? pop.ancestry : "undefined"}</p>
						<p>{pop.dateOfBirth ? pop.dateOfBirth : "undefined"}</p>
						<p>{pop.eyeColour ? pop.eyeColour : "undefined"}</p>
						<p>{pop.gender ? pop.gender : "undefined"}</p>
						<p>{pop.hairColour ? pop.hairColour : "undefined"}</p>
						<p>{pop.hogwartsStaff ? `${pop.hogwartsStaff}` : "undefined"}</p>
						<p>{pop.hogwartsStudent ? `${pop.hogwartsStudent}` : "undefined"}</p>
						<p>{pop.house ? pop.house : "undefined"}</p>
						<p>{pop.patronus ? pop.patronus : "undefined"}</p>
						<p>{pop.species ? pop.species : "undefined"}</p>
						<p>{pop.wizard ? `${pop.wizard}` : "undefined"}</p>
						<p>{pop.yearOfBirth ? pop.yearOfBirth : "undefined"}</p>
					</div>
					
				</div>
				<span>X</span>
			</div>
		</div>
	)
}

export default Popup