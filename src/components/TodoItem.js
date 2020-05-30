import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }
    render() {
        const { text, dueDate, checked, id, onToggle, onRemove} = this.props;

        var date = new Date();
        var year = date.getFullYear();
        var month = (1 + date.getMonth());
        month = month >= 10 ? month : '0' + month;
        var day = date.getDate();
        day = day >= 10 ? day : '0' + day;
        date = year + '-' + month + '-' + day;

        return (
            <div className={`todo-item ${date > dueDate && 'last'}`} onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation();
                    onRemove(id)
                }
                }>&times;</div>
                <div className={`todo-text ${checked && 'checked'}`}>
                    <span>{text}</span><span style={{ float: "right" }}>{date == dueDate && (<span className="check-mark">· </span>)}{dueDate}</span>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        );
    }
}

export default TodoItem;