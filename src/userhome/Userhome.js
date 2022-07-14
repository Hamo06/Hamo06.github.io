import './Userhome.scss'
import { useDispatch, useSelector } from "react-redux";
import person from '../assets/GryffindorPhoto/person.svg'
import mammal from '../assets/GryffindorPhoto/mammal.svg'
import { popup , popupstatus } from '../Redux/action';

function Userhome () {
	const local = useSelector((state) => state.localReducer);
	const data = useSelector((state) => state.fetchrReducer);
	const dispatch = useDispatch();
	let a = 0;
	return (
		<div className='home_user' onClick={(e) => {
			if(e.target.id !== "" ){
				dispatch(popup(data.find(item => item.name === e.target.id)));
				dispatch(popupstatus(true))
			}
		}} >
			{ data.length && data.map(item => local === "/Gryffindor" ? item.house === "Gryffindor" && <div id={item.name} className='home_user_info'  key={a++}  >
				<div  className='home_image_info'  >
					<img id={item.name} src={item.image ? item.image : item.gender ==='male' ? person : mammal }  />
				</div>
				<p id={item.name} > { item.name } </p>
			</div> : local === "/Slytherin" ? item.house === "Slytherin" && <div id={item.name} className='home_user_info'  key={a++}  >
				<div  className='home_image_info'  >
					<img id={item.name} src={item.image ? item.image : item.gender ==='male' ? person : mammal }  />
				</div>
				<p id={item.name} >{item.name}</p>
			</div> : local === "/Hufflepuff" ? item.house === "Hufflepuff" && <div id={item.name} className='home_user_info'  key={a++}  >
				<div  className='home_image_info'  >
					<img id={item.name} src={item.image ? item.image : item.gender ==='male' ? person : mammal }  />
				</div>
				<p id={item.name} >{item.name}</p>
			</div> : local === "/Ravenclaw" && item.house === "Ravenclaw" && <div id={item.name} className='home_user_info'  key={a++}  >
				<div  className='home_image_info'  >
					<img id={item.name} src={item.image ? item.image : item.gender ==='male' ? person : mammal }  />
				</div>
				<p id={item.name} >{item.name}</p>
			</div> )}
		</div>
		
	)
}


export default Userhome