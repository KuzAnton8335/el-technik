import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutAs from './pages/AboutAs';
import AdminPanel from './pages/AdminPanel';
import Cart from './pages/Cart';
import Catalog from './pages/Catalog';
import Contacts from './pages/Contacts';
import { IndexPage } from './pages/Index';
import Politics from './pages/Politics';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<IndexPage />} />
				<Route path="/catalog" element={<Catalog />} />
				<Route path="/contacts" element={<Contacts />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/admin" element={<AdminPanel />} />
				<Route path="/about" element={<AboutAs />} />
				<Route path="/politics" element={<Politics />} />
			</Routes>
		</Router>
	);
};

export default App;
