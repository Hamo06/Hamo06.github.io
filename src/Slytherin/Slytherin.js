import Header from '../header/Header'
import './Slytherin.scss'
import { useSelector } from 'react-redux'
import Userhome from '../userhome/Userhome'
import Popup from '../popup/Popup';
import SearchUser from '../searchuser/SearchUser';

function Slytherin () {
	const chang = useSelector((state) => state.changeReducer);
	const pop = useSelector((state) => state.popupReducer);
	const stat = useSelector((state) => state.popupstatusReducer);
	return ( 
		<div className='Slytherin'>
			<Header />
			{chang.length > 0 ? <SearchUser /> : <Userhome />}
			{Object.keys(pop).length > 0 && stat && <Popup />}
		</div>
	)
}

export default Slytherin