import { useSelector } from 'react-redux';
import Header from '../header/Header';
import SearchUser from '../searchuser/SearchUser';
import Popup from '../popup/Popup';
import './Home.scss';

function Home () {
	const chang = useSelector((state) => state.changeReducer);
	const pop = useSelector((state) => state.popupReducer);
	const stat = useSelector((state) => state.popupstatusReducer);
	return (
		<div className='home'>
			<Header />
			{chang.length > 0 && <SearchUser />}
			{Object.keys(pop).length > 0 && stat && <Popup />}
		</div>
	)
}

export default Home