import React from 'react';
import { IoMdCall } from 'react-icons/io';
import { MdVideoCall } from 'react-icons/md';
import { AiOutlineMessage, AiOutlineInfoCircle } from 'react-icons/ai';

export default function CallDetailInfo({ id, via, direction, duration }) {
    return (
        <div className="callDetailInfo" style={{ display: 'none' }} id={id}>
            <div className="callDetailInfoRest">via: {via}<br /> direction: {direction}<br />duration: {duration} sec.</div>
            <div className="callMethods">
                <IoMdCall className="callMethodsIcon" style={{ color: "#2ac420" }} />
                <MdVideoCall className="callMethodsIcon" style={{ color: "blue" }} />
                <AiOutlineMessage className="callMethodsIcon" style={{ color: "#335eff" }} />
                <AiOutlineInfoCircle className="callMethodsIcon" style={{ color: "grey" }} />
            </div>
        </div>
    );
}
