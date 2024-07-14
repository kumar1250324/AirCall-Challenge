import React from 'react';
import moment from 'moment';

export default function CallInfo({ from, to, date }) {
    return (
        <div className="call-log-info">
            <div>
                <div className="number">{from}</div>
                <div className="call-from">from {to}</div>
            </div>
            <div className="time">
                {moment(date).format("LT")}
            </div>
        </div>
    );
}
