import React from 'react';
import { MdOutlineCallReceived, MdOutlineCallMissed, MdOutlineCallMade, MdOutlineCallMissedOutgoing } from 'react-icons/md';
import { BsVoicemail } from 'react-icons/bs';

export default function CallStatus({ direction, callType }) {
    if (direction === 'inbound') {
        return callType === 'answered' ? <MdOutlineCallReceived className="callMade" /> :
               callType === 'missed' ? <MdOutlineCallMissed className="missedCall" /> : 
               <BsVoicemail className="voiceMail" />;
    } else {
        return callType === 'answered' ? <MdOutlineCallMade className="callMade" /> :
               callType === 'missed' ? <MdOutlineCallMissedOutgoing className="missedCall" /> : 
               <BsVoicemail className="voiceMail" />;
    }
}
