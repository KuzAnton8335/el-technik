import './CardPage.scss';
export const ProductImages = ({ product }) => (
	<div className="cardPage__content-images">
		<img
			src={product.image}
			alt={product.title}
			className="cardPage__content-image"
			width={328}
			height={243}
		/>
	</div>
);
