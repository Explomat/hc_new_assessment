import React, { Component } from 'react';
import PaContainer from './PaContainer';
import { AlertWarning } from '../../components/modules/alert';
import * as actionCreators from '../../actions';
import { connect } from 'react-redux';

class HalfYearContainer extends Component {
	
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
		const pasLen = pas ? pas.length : 0;
		return (
			pasLen > 0 ?
				<div className='half-year__months-container'>
					<div className='half-year__months'>
						{pas.map((p, index) => {
							return index > 0 ? <PaContainer key={p} id={p} /> : null;
						})}
					</div>
				</div> :
				<AlertWarning className='half-year__no-months' text='Нет данных' isClose={false} />
		);
	}
	
	render(){
		const { title, bossFullname, pas } = this.props;
		const pasLen = pas ? pas.length : 0;
		const { isDisplayMonths } = this.state;
		return (
			<div className='half-year clearfix'>
				<div className='half-year__header'>
					<strong className='half-year__title'>{title}</strong>
					<strong className='half-year__boss-fullname'>{bossFullname}</strong>
				</div>
				<div className='half-year__year'>
					<div className='pas'>
						{pasLen > 0 &&
							<PaContainer
								key={pas[0]}
								id={pas[0]}
							/>
						}
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
	return { ...state.changes[id] };
}

export default connect(mapStateToProps, actionCreators)(HalfYearContainer);