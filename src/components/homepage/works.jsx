import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="School"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./lereacteur.png"
								alt="reacteur"
								className="work-image"
							/>
							<div className="work-title">Le Reacteur</div>
							<div className="work-subtitle">
								Développeur Web et mobile
							</div>
							<div className="work-duration">2025 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
