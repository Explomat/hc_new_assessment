import React from 'react';
import PropTypes from 'prop-types';
import { TextView, TextAreaView } from '../../text-label';
import SelectedItem from './SelectedItem';
import NotSelectedItem from './NotSelectedItem';
import { find, filter } from 'lodash';
import cx from 'classnames';

import './style/message.styl';


class Message extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            subject: '',
            body: '',
            selectedItems: props.selectedItems,
            notSelectedItems: props.notSelectedItems
        }
    }

    static propsTypes = {
        notSelectedItems: PropTypes.array,
        selectedItems: PropTypes.array,
        onSend: PropTypes.func,
        isShow: PropTypes.bool,
        title: PropTypes.string
    }

    static defaultProps = {
        selectedItems: [],
        notSelectedItems: [],
        isShow: false,
        title: ' '
    }

    componentWillReceiveProps(nextProps, prevProps){
        const selectedItems = nextProps.selectedItems || prevProps.selectedItems;
        const notSelectedItems = nextProps.notSelectedItems || prevProps.notSelectedItems;
        const isShow = nextProps.isShow || prevProps.isShow;
        this.setState({
            selectedItems: selectedItems,
            notSelectedItems: notSelectedItems,
            isShow: isShow,
            subject: '',
            body: ''
        });
    }

    handleSend(){
        if (this.props.onSend)
            this.props.onSend(this.state.selectedItems, this.state.subject, this.state.body);
    }

    handleRemoveFromSelected(id){
        var selectedItems = this.state.selectedItems;
        var notSelectedItems = this.state.notSelectedItems;

        var item = find(selectedItems, (item) => {
            return item.id === id;
        });
        selectedItems = filter(selectedItems, (item) => {
            return item.id !== id;
        });
        if (item) {
            notSelectedItems = notSelectedItems.concat([item]);
        }
        this.setState({selectedItems: selectedItems, notSelectedItems: notSelectedItems});
    }

    handleRemoveFromNotSelected(id){
        var selectedItems = this.state.selectedItems;
        var notSelectedItems = this.state.notSelectedItems;

        var item = find(notSelectedItems, (item) => {
            return item.id === id;
        });
        notSelectedItems = filter(notSelectedItems, (item) => {
            return item.id !== id;
        });
        if (item) {
            selectedItems = selectedItems.concat([item]);
        }
        this.setState({selectedItems: selectedItems, notSelectedItems: notSelectedItems});
    }

    handleChangeSubject(subject){
        this.setState({subject: subject});
    }

    handleChangeBody(body){
        this.setState({body: body});
    }

    render() {
        if (!this.props.isShow) {
            return null;
        }
        const isButtonDisabled = this.state.subject.trim() === '' || this.state.body.trim() === '' || this.state.selectedItems.length === 0;
        const buttonClasses = cx({
            'event-btn': true,
            'event-btn--reverse': true,
            'event-btn event-btn--disabled': isButtonDisabled
        });
        const selectedItemsClasses = cx({
            'message__items-selected': true,
            'message__items-selected--hide': this.state.selectedItems.length === 0,
            'message__items-selected--100': this.state.notSelectedItems.length === 0

        });
        const notSelectedItemsClasses = cx({
            'message__items-not-selected': true,
            'message__items-not-selected--hide': this.state.notSelectedItems.length === 0,
            'message__items-not-selected--100': this.state.selectedItems.length === 0
        });
        return (
            <div className="message">
                <div className="message__modal-box">
                    <div className="message__content">
                        <div className="message__header">
                            <button type="button" className="close-btn" onClick={this.props.onClose}>&times;</button>
                            <span>{this.props.title}</span>
                        </div>
                        <div className="message__body clearfix">
                            <div className="message__text-wrapper">
                                <TextView
                                    onBlur={::this.handleChangeSubject}
                                    value={this.state.subject}
                                    className="message__subject"
                                    placeholder="Тема" />
                                <TextAreaView
                                    onBlur={::this.handleChangeBody}
                                    value={this.state.body}
                                    placeholder="Сообщение"/>
                            </div>
                            <div className="message__items">
                                <div className={selectedItemsClasses}>
                                    <span className="message__d">Кому:</span>
                                    {this.state.selectedItems.map((item, index) => {
                                        return <SelectedItem key={index} {...item} onRemoveSelected={::this.handleRemoveFromSelected}/>
                                    })}
                                </div>
                                <div className={notSelectedItemsClasses}>
                                    <span className="message__d">Выбрать:</span>
                                    {this.state.notSelectedItems.map((item, index) => {
                                        return <NotSelectedItem key={index} {...item} onRemoveNotSelected={::this.handleRemoveFromNotSelected}/>
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="message__footer">
                            <button type="button" className={buttonClasses} onClick={::this.handleSend} disabled={isButtonDisabled}>Отправить</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
export default Message;
