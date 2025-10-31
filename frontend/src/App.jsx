import { Route, Routes } from 'react-router-dom';
import AboutAs from './pages/AboutAs';
import AdminLogin from './pages/AdminPanel';
import CardPage from './pages/CardPage';
import Cart from './pages/Cart';
import Catalog from './pages/Catalog';
import Contacts from './pages/Contacts';
import { IndexPage } from './pages/Index';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import Politics from './pages/Politics';
import ProductPanel from './pages/ProductPanel';
import RegistrationPage from './pages/RegistrationPage';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<IndexPage />} />
			<Route path="/catalog" element={<Catalog />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/registration" element={<RegistrationPage />} />
			<Route path="/contacts" element={<Contacts />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/admin-login" element={<AdminLogin />} />
			<Route path="/productpanel" element={<ProductPanel />} />
			<Route path="/about" element={<AboutAs />} />
			<Route path="/politics" element={<Politics />} />
			<Route path="/products/:id" element={<CardPage />} />
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
};

export default App;
