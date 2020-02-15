import React, {useState} from "react";

import Avatar from '../Avatar/Avatar';
import Quote from "../Quote/Quote";

import PersonItemPropTypes from "./PersonItem.prop-types";

const PersonItem = props => {
    const [online, setOnline] = useState(props.person.online);
    const onlineStatus = online ? 'online' : 'offline';

    return (
        <div className="person-item">
            <Avatar person={props.person}/>

            <div>
                <h4>{props.person.name}</h4>
                <p className={`onlineStatus ${onlineStatus}`}
                   onClick={() => {
                       setOnline(!online);
                   }}
                >{onlineStatus}</p>
                <Quote person={props.person}/>
            </div>
        </div>
    );
};

PersonItemPropTypes(PersonItem);

export default PersonItem;