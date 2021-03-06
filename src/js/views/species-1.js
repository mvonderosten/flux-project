import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import { Species } from "../component/species";

export function SpeciesOne() {
	const [species, setSpecies] = useState([]);

	useEffect(() => {
		fetch("https://swapi.co/api/species/")
			.then(resp => resp.json())
			.then(data => {
				//console.log(data.results);
				setSpecies(data.results);
			});
	}, []);

	return (
		<>
			<h1>Star Wars</h1>

			<h2>Species</h2>
			<div className="card-body d-flex justify-content-center">
				<div>
					{species.map((item, index) => {
						return (
							<div key={item} className="card-whole">
								<Species object={item} />
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
