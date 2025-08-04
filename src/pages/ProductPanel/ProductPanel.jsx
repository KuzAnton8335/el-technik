import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./productPanel.scss";
import { Header } from '../../layouts/Header/Header.jsx';
import { Footer } from '../../layouts/Footer/Footer.jsx';
import { AsideProductPanel } from '../../components/AsideProductPanel/AisdeProductPanel';
import { TableProducts } from '../../components/TableProducts/TableProducts';

const ProductPanel = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		const checkAuth = async () => {
			const token = localStorage.getItem('adminToken');

			if (!token) {
				navigate('/admin-login');
				return;
			}

			try {
				const response = await fetch('/api/v1/admin/auth/me', {
					method: 'GET',
					headers: {
						'Authorization': `Bearer ${token}`,
					},
				});

				if (!response.ok) {
					throw new Error('Не авторизован');
				}

				setIsAuthenticated(true);
			} catch (err) {
				localStorage.removeItem('adminToken');
				navigate('/admin-login');
			} finally {
				setLoading(false);
			}
		};

		checkAuth();
	}, [navigate]);

	if (loading) {
		return <div>Загрузка...</div>;
	}

	if (!isAuthenticated) {
		return null;
	}

	return (
		<div className="product-panel">
			<Header />
			<div className="container">
				<div className="product-panel__wrapper">
					<AsideProductPanel />
					<TableProducts />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ProductPanel;
