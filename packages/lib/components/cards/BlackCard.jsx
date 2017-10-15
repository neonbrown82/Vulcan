import React, { PropTypes, Component } from 'react';
import { registerComponent, ModalTrigger } from 'meteor/vulcan:core';

const BlackCard = ({card, currentUser}) =>

    <div className="card black-card">
        <p>{card.text}</p>
    </div>

export default BlackCard;