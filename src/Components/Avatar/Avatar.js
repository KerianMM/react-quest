import React from "react";
import AvatarPropTypes from "./Avatar.prop-types";

const Avatar = props => <img className="avatar"
                             src={props.person.avatar}
                             alt={props.person.name}/>;

AvatarPropTypes(Avatar);

export default Avatar;