import React, { PropTypes, Component } from 'react';
import { registerComponent, ModalTrigger } from 'meteor/vulcan:core';

const WhiteCard = ({card, currentUser}) =>

    <div className="card white-card">
        <p>{card.text}</p>
    </div>

export default WhiteCard;