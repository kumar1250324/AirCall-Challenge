import React, { useState } from 'react';
import moment from 'moment';
import axios from 'axios';
import CallStatus from './CallStatus.jsx';
import CallInfo from './CallInfo.jsx';
import CallActions from './CallActions.jsx';
import CallDetailInfo from './CallDetailInfo.jsx';

export default function CallLog({ callLog }) {
    const [date, setDate] = useState(callLog.created_at);
    const id = callLog.id;
    const idString = id.toString();

    const archive = async () => {
        await axios.patch(`https://aircall-backend.onrender.com/activities/${idString}`, {
            is_archived: true,
        });
        window.location.reload();
    };

    const unarchive = async () => {
        await axios.patch(`https://aircall-backend.onrender.com/activities/${idString}`, {
            is_archived: false,
        });
        window.location.reload();
    };

    const callDetail = () => {
        const detailElement = document.getElementById(idString);
        if (detailElement.style.display === 'flex') {
            detailElement.style.display = 'none';
        } else {
            detailElement.style.display = 'flex';
        }
    };

    return (
        <div>
            <div className="activity-detail">
                <div className="date-call" id="date-call">
                    <div className="date-call-moment">{moment(date).format("MMMM Do YYYY")}{" "}</div>
                    <div className="date-call-archive-unarchive" id={`store${idString}`}> Store</div>
                    <div className="date-call-archive-unarchive" id={`discard${idString}`}> Discard</div>
                </div>
                <div className="call-log">
                    <div className="call-log-status">
                        <CallStatus direction={callLog.direction} callType={callLog.call_type} />
                    </div>
                    <CallInfo from={callLog.from} to={callLog.to} date={date} />
                    <CallActions 
                        id={idString} 
                        isArchived={callLog.is_archived} 
                        archive={archive} 
                        unarchive={unarchive} 
                        callDetail={callDetail} 
                    />
                </div>
                <CallDetailInfo 
                    id={idString} 
                    via={callLog.via} 
                    direction={callLog.direction} 
                    duration={callLog.duration} 
                />
            </div>
        </div>
    );
}
