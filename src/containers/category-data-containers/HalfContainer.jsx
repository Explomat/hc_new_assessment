import React, { Component } from 'react';
import PaContainer from './PaContainer';
import * as actionCreators from '../../actions';
import { connect } from 'react-redux';

class HalfContainer extends Component {
	
	constructor(props){
		super(props);
		
		this.handleToggleDisplayMonths = this.handleToggleDisplayMonths.bind(this);
		this.state = {
			isDisplayMonths: false
		};
	}
	
	handleToggleDisplayMonths(){
		const { isDisplayMonths } = this.state;
		this.setState({ isDisplayMonths: !isDisplayMonths });
	}
	
	_renderMonths(){
		const { pas } = this.props;
		return (
			<div className='half-year__months-container'>
				<div className='half-year__months'>
					{pas.map((p, index) => {
						return index > 0 ? <PaContainer key={p} id={p} type='halfYear' /> : null;
					})}
				</div>
			</div>
		);
	}
	
	render(){
		const { title, bossFullname, pas } = this.props;
		const pasLen = pas ? pas.length : 0;
		const { isDisplayMonths } = this.state;
		if (pasLen === 0){
			return null;
		}
		return (
			<div className='half-year clearfix'>
				<div className='half-year__header'>
					<strong className='half-year__title'>{title}</strong>
					<strong className='half-year__boss-fullname'>{bossFullname}</strong>
				</div>
				<div className='half-year__year'>
					<div className='pas'>
						<PaContainer
							key={pas[0]}
							id={pas[0]}
							type='halfYear'
						/>
					</div>
				</div>
				{isDisplayMonths ?
					<div
						className='half-year__display-months'
						onClick={this.handleToggleDisplayMonths}
					>
						Скрыть
						<i className='icon-up-open' />
					</div> :
					<div
						className='half-year__display-months'
						onClick={this.handleToggleDisplayMonths}
					>
						Показать по месяцам
						<i className='icon-down-open' />
					</div>
				}
				{isDisplayMonths && this._renderMonths()}
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	const { id } = ownProps;
	return { ...state.halves[id] };
}

export default connect(mapStateToProps, actionCreators)(HalfContainer);