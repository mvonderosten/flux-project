import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const SpeciesOne = props => {
	const { store, actions } = useContext(Context);
	const [species, setSpecies] = useState([]);

	// useEffect(() => {
	// 	fetch("https://swapi.co/api/species/" + props.match.params.theid)
	// 		.then(resp => resp.json())
	// 		.then(data => {
	// 			//console.log(data.results);
	// 			setSpecies(data.results);
	// 		});
	// }, []);

	return (
		// <div>
		//     {}

		<div className="card-body text-light">{props.match.params.someVar}</div>
	);
};

SpeciesOne.propTypes = {
	match: PropTypes.object
};
