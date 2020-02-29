import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => (
	<>
		<h1>Star Wars</h1>

		<h2>Guide to the Galaxy</h2>
		<div className="card-body d-flex justify-content-center">
			<div className="card-home">
				<Link to="/films-1/">Films</Link>
			</div>
		</div>

		<div className="card-body d-flex justify-content-center">
			<div className="card-home">
				<Link to="/people-1/">People</Link>
			</div>
		</div>

		<div className="card-body d-flex justify-content-center">
			<div className="card-home">
				<Link to="/species-1">Species</Link>
			</div>
		</div>

		<div className="card-body d-flex justify-content-center">
			<div className="card-home">
				<Link to="/planets-1">Planets</Link>
			</div>
		</div>
	</>
);
