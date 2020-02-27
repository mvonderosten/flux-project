import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export function Species(props) {
	return (
		<div>
			<div className="card">
				<div className="card-body">
					{"Name: "}
					{props.object.name}
					<br /> <br />
					{"Classification: "}
					{props.object.classification}
					<br /> <br />
					{"Desugnation: "}
					{props.object.designation}
					<br /> <br />
					{"Average Height: "}
					{props.object.average_height}
					<br /> <br />
					{"Skin Color: "}
					{props.object.skin_colors}
					<br /> <br />
					{"Hair Color: "}
					{props.object.hair_colors}
					<br /> <br />
					{"Eye Color: "}
					{props.object.eye_colors}
					<br /> <br />
					{"Average Lifespn: "}
					{props.object.average_lifespan}
					<br /> <br />
					{"Language: "}
					{props.object.language}
					<br /> <br />
				</div>
			</div>
		</div>
	);
}

Species.propTypes = {
	object: PropTypes.object
};
