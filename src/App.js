import { Routes, Route } from 'react-router-dom';
import CreatePerson from './Pages/CreatePerson';
import Home from './Pages/Home';
import SearchPerson from './Pages/SearchPerson';
import UpdatePerson from './Pages/UpdatePerson';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/search_person' element={<SearchPerson />} />
			<Route path='/create_person' element={<CreatePerson />} />
			<Route path='/update_person/:id' element={<UpdatePerson />} />
		</Routes>
	);
}

export default App;
