import React, { useState, useEffect } from 'react';
import { AiOutlineCheckCircle, AiFillCheckCircle } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';

export default function CallActions({ id, isArchived, archive, unarchive, callDetail }) {
    const [isShown, setIsShown] = useState(0);

    useEffect(() => {
        const box1Id = "store" + id;
        const box2Id = "discard" + id;

        if (isShown === 0) {
            document.getElementById(box1Id).style.display = "none";
            document.getElementById(box2Id).style.display = "none";
        } else if (isShown === 1) {
            document.getElementById(box1Id).style.display = "flex";
            document.getElementById(box2Id).style.display = "none";
        } else if (isShown === 2) {
            document.getElementById(box1Id).style.display = "none";
            document.getElementById(box2Id).style.display = "flex";
        }
    }, [isShown, id]);

    return (
        <div className="mark">
            {isArchived ?
                <AiFillCheckCircle
                    className="marked-unmarked"
                    onClick={unarchive}
                    onMouseOver={() => setIsShown(2)}
                    onMouseOut={() => setIsShown(0)}
                    style={{ height: '85%', width: '85%' }}
                    cursor="pointer"
                /> :
                <AiOutlineCheckCircle
                    className="marked-unmarked"
                    style={{ height: '85%', width: '85%' }}
                    onMouseOver={() => setIsShown(1)}
                    onMouseOut={() => setIsShown(0)}
                    onClick={archive}
                    cursor="pointer"
                />
            }
            <BsThreeDotsVertical
                className="callDetailIcon"
                style={{ height: '100%', width: '100%' }}
                onClick={callDetail}
                cursor="pointer"
            />
        </div>
    );
}
