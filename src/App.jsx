import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutAs from './pages/AboutAs';
import AdminPanel from './pages/AdminPanel';
import CardPage from './pages/CardPage';
import Cart from './pages/Cart';
import Catalog from './pages/Catalog';
import Contacts from './pages/Contacts';
import { IndexPage } from './pages/Index';
import Politics from './pages/Politics';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/registrationPage';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<IndexPage />} />
				<Route path="/catalog" element={<Catalog />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/registration" element={<RegistrationPage />} />
				<Route path="/contacts" element={<Contacts />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/admin" element={<AdminPanel />} />
				<Route path="/about" element={<AboutAs />} />
				<Route path="/politics" element={<Politics />} />
				<Route path="/cardPage" element={<CardPage />} />
			</Routes>
		</Router>
	);
};

export default App;
