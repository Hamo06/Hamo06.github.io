import { useDispatch, useSelector } from 'react-redux';
import './SearchUser.scss';
import person from '../assets/GryffindorPhoto/person.svg';
import mammal from '../assets/GryffindorPhoto/mammal.svg';
import { popup , popupstatus } from '../Redux/action';

function SearchUser() {
	const chang = useSelector((state) => state.changeReducer);
	const data = useSelector((state) => state.fetchrReducer);
	const local = useSelector((state) => state.localReducer);
	const dispatch = useDispatch()
	let a = 0;
	return (
		<div className='home_user' onClick={(e) => {
			if(e.target.id !== "" ){
				dispatch(popup(data.find(item => item.name === e.target.id)));
				dispatch(popupstatus(true))
			}
		}}>
			{data.filter( item =>  local === "/Gryffindor" ? item.house === "Gryffindor" && item.name.indexOf(chang) !== -1 
			: local === "/Slytherin" ? item.house === "Slytherin" && item.name.indexOf(chang) !== -1 
			: local === "/Hufflepuff" ? item.house === "Hufflepuff" && item.name.indexOf(chang) !== -1 
			: local === "/Ravenclaw" ? item.house === "Ravenclaw" && item.name.indexOf(chang) !== -1
			: local === "/Home" && item.name.indexOf(chang) !== -1)
			.map(item => 
				<div id={item.name} className='home_user_info'  key={a++}  >
					<div  className='home_image_info'  >
						<img id={item.name} src={item.image ? item.image : item.gender ==='male' ? person : mammal }  />
					</div>
					<p id={item.name} > { item.name } </p>
				</div>
			)}
		</div>
	)
}

export default SearchUser