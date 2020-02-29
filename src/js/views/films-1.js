import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import { Films } from "../component/films";

export function FilmsOne() {
	const [films, setFilms] = useState([]);

	useEffect(() => {
		fetch("https://swapi.co/api/films/")
			.then(resp => resp.json())
			.then(data => {
				//console.log(data.results);
				setFilms(data.results);
			});
	}, []);

	return (
		<>
			<h1>Star Wars</h1>

			<h2>Films</h2>
			<div className="card-body d-flex justify-content-center">
				<div>
					{films.map((item, index) => {
						return (
							<div key={item} className="card-whole">
								<Films object={item} />
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
