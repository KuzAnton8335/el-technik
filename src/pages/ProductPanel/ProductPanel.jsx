import "./productPanel.scss";
import { Header } from '../../layouts/Header/Header.jsx';
import { Footer } from '../../layouts/Footer/Footer.jsx';
import {AsideProductPanel} from '../../components/AsideProductPanel/AisdeProductPanel'
import {TableProducts} from '../../components/TableProducts/TableProducts'


const ProductPanel = () => {
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
