
import React from "react";
import './Resume.css';

const Resume = () => {
	return (
		<div id="resume" className="resume-container">
			<h1 className="resume-title">My Resume</h1>
			<div className="resume-viewer">
				<iframe
					src={require('../../Assets/resume.pdf')}
					title="Resume"
					width="100%"
					height="800px"
					style={{ border: 'none', borderRadius: '12px' }}
				/>
			</div>
			<a
				href={require('../../Assets/resume.pdf')}
				download
				className="resume-download-btn"
			>
				Download PDF
			</a>
		</div>
	);
};

export default Resume;
