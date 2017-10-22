import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'bootstrap/scss/bootstrap.scss';
import '../styles/global.scss';


const IndexLayout = ({ children }) => (
	<div>
		<Helmet
			title="Gatsby Default Starter"
			meta={[
				{ name: 'description', content: 'Sample' },
				{ name: 'keywords', content: 'sample, something' },
			]}
		/>
		<div className="container">
			{children()}
		</div>
	</div>
);

IndexLayout.propTypes = {
	children: PropTypes.func,
};

IndexLayout.defaultProps = {
	children: null,
};

export default IndexLayout;