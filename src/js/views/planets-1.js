import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import { Planets } from "../component/planets";

export function PlanetsOne() {
	const [planets, setPlanets] = useState([]);

	useEffect(() => {
		fetch("https://swapi.co/api/planets/")
			.then(resp => resp.json())
			.then(data => {
				setPlanets(data.results);
			});
	}, []);

	return (
		<>
			<h1>Star Wars</h1>

			<h2>Planets</h2>
			<div className="card-body d-flex justify-content-center">
				<div>
					{planets.map((item, index) => {
						return (
							<div key={item} className="card-whole">
								<Planets object={item} />
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
