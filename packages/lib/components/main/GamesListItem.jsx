/*
 * An item in the games list
 */

import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';

const GamesListItem = ({game}) =>

    <Components.ModalTrigger label={game.name} size="small">
        <div>
            <p>_id: {game._id}</p>
            <p>Name: {game.name}</p>
            <p>isOpen: {game.isOpen ? 'true' : 'false'}</p>
            <p>isActive: {game.isActive ? 'true' : 'false'}</p>
            <p>createdAt: {game.createdAt}</p>
            <p>creator: {game.userId}</p>
            <p>options:</p>
            <ul>
                <li>isPrivate: {game.options.isPrivate ? 'true' : 'false'}</li>
                <li>maxScore: {game.options.maxScore}</li>
                <li>maxPlayers: {game.options.maxPlayers}</li>
                <li>timeLimit: {game.options.timeLimit}</li>
                <li>blackDeck:
                    <ul>
                        {game.options.blackDeck.map(card =>
                            <li key={card._id} card={card}>{card._id}</li>
                        )}
                    </ul>
                </li>
                <li>whiteDeck:
                    <ul>
                        {game.options.whiteDeck.map(card =>
                            <li key={card._id} card={card}>{card._id}</li>
                        )}
                    </ul>
                </li>
            </ul>
            <p>Players:</p>
            {game.players.map(player =>
                <ul key={player._id} player={player} style={ { margin: '12px 0px' } }>
                    <li>_id: {player._id}</li>
                    <li>lastPooped: {player.lastPooped}</li>
                    <li>awesomePoints: {player.awesomePoints}</li>
                    <li>hand:
                        <ul>
                            {game.players.hand ? game.players.hand.map(card =>
                                <li key={card._id} card={card}>{card._id}</li>
                            ) : null}
                        </ul>
                    </li>
                </ul>
            )}

        </div>
    </Components.ModalTrigger>

export default GamesListItem;