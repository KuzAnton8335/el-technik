import { Footer } from '../layouts/Footer/Footer';
import { Header } from '../layouts/Header/Header';
import { MainSection } from '../layouts/MainSection/MainSection';

export const IndexPage = () => {
	return (
		<div className="index-page">
			<Header />
			<MainSection />
			<Footer />
		</div>
	);
};
