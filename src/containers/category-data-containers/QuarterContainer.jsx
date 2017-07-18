import React, { Component } from 'react';
import PaContainer from './PaContainer';
import { connect } from 'react-redux';

class QuarterContainer extends Component {
	render(){
		const {
			pas
		} = this.props;
		return (
			<div className='quarters'>
				<h3>QUARTER</h3>
				<div className='pas'>
					{pas.map((p, index) =>
						<PaContainer
							key={index}
							id={p}
						/>
					)}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	const { id } = ownProps;
	return { ...state.changes[id] };
}


export default connect(mapStateToProps)(QuarterContainer);