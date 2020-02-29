import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import { People } from "../component/people";
import { People as PeopleTest } from "../component/people-test";

export function PeopleOne() {
	const [people, setPeople] = useState([]);
	const [char, setChar] = useState({});

	useEffect(() => {
		fetch("https://swapi.co/api/people/")
			.then(resp => resp.json())
			.then(data => {
				setPeople(data.results);
			});
	}, []);

	const findChar = (charName, charList) => {
		return charList.filter(char => char.name === charName);
	};

	// {
	//         "name": "Luke Skywalker",
	//         "height": "172",
	//         "mass": "77",
	//         "hair_color": "blond",
	//         "skin_color": "fair",
	//         "eye_color": "blue",
	//         "birth_year": "19BBY",
	//         "gender": "male",
	//         "homeworld": "https://swapi.co/api/planets/1/",
	//         "films": [
	//             "https://swapi.co/api/films/2/",
	//             "https://swapi.co/api/films/6/",
	//             "https://swapi.co/api/films/3/",
	//             "https://swapi.co/api/films/1/",
	//             "https://swapi.co/api/films/7/"
	//         ],
	//         "species": [
	//             "https://swapi.co/api/species/1/"
	//         ],
	//         "vehicles": [
	//             "https://swapi.co/api/vehicles/14/",
	//             "https://swapi.co/api/vehicles/30/"
	//         ],
	//         "starships": [
	//             "https://swapi.co/api/starships/12/",
	//             "https://swapi.co/api/starships/22/"
	//         ],
	//         "created": "2014-12-09T13:50:51.644000Z",
	//         "edited": "2014-12-20T21:17:56.891000Z",
	//         "url": "https://swapi.co/api/people/1/"
	//     },

	return (
		<>
			<h1>Star Wars</h1>

			<h2>People</h2>
			<div className="card-body d-flex justify-content-center">
				<div>
					{people.map((item, index) => {
						return (
							<div key={item} className="card-whole">
								{/* <People object={item} /> */}
								<PeopleTest object={item} />
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
