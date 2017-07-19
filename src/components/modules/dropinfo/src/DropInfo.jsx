import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style/dropinfo.styl';

class DropInfo extends Component {

	constructor(props){
		super(props);
		
		this.handleToogleExpand = this.handleToogleExpand.bind(this);
		this._setHeight = this._setHeight.bind(this);
		this.interval = null;
		this.state = {
			expanded: this.props.expanded,
			height: 0
		};
	}

	getChildContext() {
		return {
			parent: this
		};
	}

	componentDidMount(){
		this.expand(this.props.expanded);
	}
	
	componentWillReceiveProps(nextProps){
		if (nextProps.expanded !== undefined && nextProps.expanded !== null){
			this.expand(nextProps.expanded);
		}
	}

	componentWillUnmount(){
		clearInterval(this.interval);
	}

	handleToogleExpand() {
		const { expanded } = this.state;
		this.setState({
			expanded: !expanded
		});
		this._setHeight(!expanded);
		this._watchHeight(!expanded);
		
		if (this.props.onExpand) {
			this.props.onExpand(!expanded);
		}
	}

	expand(_expanded){
		const height = _expanded ? this.refs.dropinfoContent.offsetHeight + this.props.additionalHeight : 0;
		this.setState({
			expanded: _expanded,
			height
		});
	}

	_setHeight(expanded){
		const ex = expanded === undefined ? this.state.expanded : expanded;
		const height = ex ? this.refs.dropinfoContent.offsetHeight + this.props.additionalHeight : 0;
		this.setState({
			height
		});
	}

	_watchHeight(expanded){
		if (expanded){
			this.interval = setInterval(this._setHeight, 500);
		} else {
			clearInterval(this.interval);
		}
	}

	render() {
		const displayContentClassName = this.state.expanded ? 'dropinfo__content-box_show' : 'dropinfo__content-box_hide';
		const displayBlockClassName = !this.state.expanded ? 'dropinfo__block_show' : 'dropinfo__block_hide';
		const glyphiconClass = this.state.expanded ? 'icon-up-open' : 'icon-down-open';
		const classNameBlock = this.props.classNameBlock ? this.props.classNameBlock : '';
		return (
			<div className='dropinfo'>
				<div onClick={this.handleToogleExpand} className={`dropinfo__block clearfix ${displayBlockClassName} ${classNameBlock}`}>
					{this.props.label}
					<span className={`dropinfo__glyphicon-block ${glyphiconClass}`} />
				</div>
				<div style={{ height: this.state.height }} className={`dropinfo__content-box ${displayContentClassName}`}>
					<div ref='dropinfoContent' className='dropinfo__content'>
						{this.props.children}
						<span onClick={this.handleToogleExpand} className={`dropinfo__glyphicon-content ${glyphiconClass}`} />
					</div>
				</div>
			</div>
		);
	}
}

DropInfo.propTypes = {
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
	expanded: PropTypes.bool,
	onExpand: PropTypes.func,
	label: PropTypes.node,
	classNameBlock: PropTypes.string,
	additionalHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

DropInfo.childContextTypes = {
	parent: PropTypes.any
};

DropInfo.defaultProps = {
	additionalHeight: 20,
	expanded: false
};

export default DropInfo;
