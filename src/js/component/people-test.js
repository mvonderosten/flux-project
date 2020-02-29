import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export function People(props) {
	const charMap = props => {
		return Object.keys(props.object).map((item, index) => {
			console.log(item);
			return <div key={index}>{`${item}: ${props.object[item]}`}</div>;
		});
	};

	// console.log(props);
	return (
		<div>
			<div className="card">
				<div className="card-body">{charMap(props)}</div>
			</div>
		</div>
	);
}

People.propTypes = {
	swArray: PropTypes.array,
	words: PropTypes.string,
	object: PropTypes.object
};
