import { useState } from "react";
import "./App.css";

import { pageData } from "./pageData";

function App() {
	const [imgState, setImgState] = useState(pageData.image[0]);
	const [fullHeart, setFullHeart] = useState(false);
	const [count, setCount] = useState(pageData.counterIntial);

	return (
		<div className="row container">
			<div className="left"></div>
			<div className="right"></div>
			<div className="tags"></div>
			<div className="headers"></div>
			<div className="img">
				<div className="card">
					<img src={imgState} alt="" />
				</div>
			</div>
			<div className="details"></div>
			<div className="slug">
				<h6>{pageData.slugHome}/</h6>
				<h6>
					<strong>{pageData.slugPage}</strong>
				</h6>
			</div>
			<div className="nav-category">
				<h6>{pageData.navCategory}</h6> <h6>{pageData.navItem}</h6>
			</div>
			<div className="tags-detail">
				<h4>{pageData.tagHead}</h4>
				<div className="tags-buttons">
					{pageData.tags.map((item) => {
						return (
							<button key={item} className="btn btn-outline-light tag-button">
								{item}
							</button>
						);
					})}
				</div>
			</div>
			<div className="product-header"></div>
			<div className="heart-icon">
				<i
					onClick={() => setFullHeart(!fullHeart)}
					className={!fullHeart ? "far fa-heart" : "fas fa-heart"}
				></i>
			</div>
			<div className="product-name">
				<h1>{pageData.productName}</h1>
				<h6> {pageData.productSub}</h6>
			</div>
			<div className="product-sub"></div>
			<div className="price">
				<h3>{pageData.price}</h3>
				<h6>{pageData.priceText}</h6>
			</div>
			<div className="rating-build">
				<div className="d-flex">
					<span>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="far fa-star"></i>
					</span>
					<h6>{pageData.ratingAvg}</h6>
				</div>
				<div className="review-count d-flex text-muted">
					<p>({pageData.ratingCount} </p>
					<p>{pageData.ratingText})</p>
				</div>
				<h6>{pageData.buildText}</h6>
			</div>
			<div className="tabs">
				{pageData.tabHeaders.map((tab) => {
					return <div key={tab}>{tab}</div>;
				})}
			</div>
			<div className="row cart">
				<div className="col-sm-12 col-md-3 available-online">
					<p>{pageData.availText}</p>
					<h6>{pageData.availCount}</h6>
				</div>
				<div className="col-sm-12 col-md-3 counter">
					<p>{pageData.counterText}</p>
					<div className="quanity-counter">
						<button
							className="btn btn-outline-dark count-button"
							onClick={
								!count - 1 < 0 ? () => setCount(count - 1) : () => setCount(0)
							}
						>
							<i className="fas fa-minus"></i>
						</button>
						<h6 style={{ backgroundColor: "white", padding: "1rem" }}>
							{count}
						</h6>
						<button
							className="btn btn-outline-dark count-button"
							onClick={() => setCount(count + 1)}
						>
							<i className="fas fa-plus"></i>
						</button>
					</div>
				</div>
				<div className="col-sm-12 col-md-4">
					<button className="btn btn-warning cart-button">
						{pageData.cartButtonText}
					</button>
				</div>
			</div>
			<div className="description">
				<h6>{pageData.productDesHead}</h6>
				<p>{pageData.productDesBody}</p>
			</div>
			<div className="img-scroll">
				{pageData.image.map((img) => (
					<div className="small-img" key={img}>
						<img
							className="preview-img"
							src={`${img}`}
							alt=""
							onMouseEnter={(e) => setImgState(e.target.src)}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
