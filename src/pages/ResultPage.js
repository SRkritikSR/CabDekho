import React, { useState, useEffect} from 'react'
import {fakeCabs} from '../fakeApi';
const ResultPage = () => {
	const [searchQuery, setSearchQuery] = useState([]);

	useEffect(() => {
		const query = JSON.parse(localStorage.getItem('history'));
		setSearchQuery(query[query.length - 1]);
	}, []);
	return (
		<>
			<section id="explore" class="explore">
				<div class="container">
					<div class="section-header">
						<h2>Cabs Avaliable</h2>
						<p>{searchQuery.from}--{searchQuery.to}</p>
						<p>{searchQuery.mode && searchQuery.mode}</p>
					</div>
					<div class="explore-content">
						<div class="row">
						{fakeCabs != [] ?
							fakeCabs.map((cabs, index) => {
								return (

										<div class=" col-md-4 col-sm-6">
											<div class="single-explore-item">
												<div class="single-explore-img">
													<img src={cabs.cabImage} alt="explore image" />
													<div class="single-explore-img-info">
														<button onclick="window.location.href='#'">best rated</button>
														<div class="single-explore-image-icon-box">
															<ul>
																<li>
																	<div class="single-explore-image-icon">
																		<i class="fa fa-arrows-alt"></i>
																		</div>
																</li>
																<li>
																	<div class="single-explore-image-icon">
																		<i class="fa fa-bookmark-o"></i>
																	</div>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div class="single-explore-txt bg-theme-1">
													<h2><a href="#"></a>{cabs.cabType}</h2>
													<p class="explore-rating-price">
														<span class="explore-rating">{cabs.ratings}</span>
														<a href="#"> &#9733;</a>
														<span class="explore-price-box">
															form
															<span class="explore-price">{cabs.priceRange}</span>
														</span>
														<a href="#">{cabs.ac ? `A/C` : 'Non A/C'}</a>
													</p>
													<div class="explore-person">
														<div class="row  " style={{margin: "2px"}}>
															<table class="col-md-12">
																<tbody>
																	<tr>
																		<td class="text-left"><p class="font-weight-bold text-smoke">Included Km</p></td>
																		<td class="text-right"><span class="font-weight-bold color-green">{cabs.includedKms} </span></td>
																	</tr>
																	<tr><td class="text-left"><p class="font-weight-bold text-smoke">Extra fare/Km</p></td>
																		<td class="text-right"><span class="font-weight-bold color-green">{cabs.extraFarePerKm}</span>
																		</td>
																	</tr>
																	<tr>
																		<td class="text-left"><p class="font-weight-bold text-smoke">Night Charges</p>
																		</td>
																		<td class="text-right"><span class="font-weight-bold color-green">{cabs.nightCharge ? `included`: `excluded`} </span>
																		</td>
																	</tr>
																	<tr>
																		<td class="text-left"><p class="font-weight-bold text-smoke">Driver Charges</p></td>
																		<td class="text-right"><span class="font-weight-bold color-green">Included </span>
																		</td>
																	</tr>
																</tbody>
															</table>
														</div>
														{/* <div class="row">
												<div class="col-sm-10">
													<p>
														Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....
													</p>
												</div>
											</div> */}
													</div>
													<div class="explore-open-close-part">
														<div class="row">
															<div class="col-sm-5">
																<button class="close-btn" onclick="window.location.href='#'">close now</button>
															</div>
															<div class="col-sm-7">
																<div class="explore-map-icon">
																	<a href="#"><i data-feather="map-pin"></i></a>
																	<a href="#"><i data-feather="upload"></i></a>
																	<a href="#"><i data-feather="heart"></i></a>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
							
								)
							}) : <p>Sorry, No Search Result Found</p>}
						</div>
					</div>
				</div>

			</section>
		</>
	)
}

export default ResultPage