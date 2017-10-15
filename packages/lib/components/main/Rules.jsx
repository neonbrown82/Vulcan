import React, { PropTypes, Component } from 'react';

const Rules = () =>

    <div>

        {/*
            TODO: pepper in commentary as it applies to THIS game
            TODO: add menu to toggle between rules and license
        */}

        <h2>
            Basic Rules
        </h2>

        <p>
            To start the game, each player draws ten White Cards.
        </p>

        <p>
            The person who most recently pooped begins as the Card Czar and plays a Black Card. The Card Czar reads the question or fill-in-the-blank phrase on the Black Card out loud.
        </p>

        <p>
            Everyone else answers the question or fills in the blank by passing one White Card, face down, to the Card Czar.
        </p>

        <p>
            The Card Czar shuffles all of the answers and shares each card combination with the group. For full effect, the Card Czar should usually re-read the Black Card before presenting each answer. The Card Czar then picks the funniest play, and whoever submitted it gets one Awesome Point.
        </p>

        <p>
            After the round, a new player becomes the Card Czar, and everyone draws back up to ten White Cards.
        </p>

        <hr />

        <h2>
            Pick <span className="bubble">2</span>
        </h2>

        <p>
            Some cards say PICK 2 on the bottom.
        </p>

        <p>
            To answer these, each player plays two White Cards in combination. PLay them in the order that the Card Czar should read them -- the order matters.
        </p>

        <p>
            If the Card Czar has lobster claws for hands, you can use paperclips to secure the cards in the right order.
        </p>

        <hr />

        <h2>
            Gambling
        </h2>

        <p>
            If a Black Card is played and you have more than one White Card that you think could win, you can bet one of your Awesome Points to play an additional White Card.
        </p>

        <p>
            If you win, you keep your point. If you lose, whoever won the round gets the point you wagere.
        </p>

        <h2>
            House Rules
        </h2>

        <p>
            Cards Against Humanity is meant to be remixed. Here are some of our favorite ways to pimp out the rules:
        </p>

        <p>
            <span className="bold">Happy Ending</span>:
            When you're ready to stop playing, play the "Make a Haiku" Black Card to end the game. This is the official ceremonial ending of a good game of Cards Against Humanity, and this card should be reserved for the end. (<span className="italic">Note</span>: Haikus don't need to follow the 5-7-5 form. They just have to be read dramatically).
        </p>

        <p>
            <span className="bold">Rebooting the Universe</span>:
            At Any time, players may trade in an Awesome Point to return as many White Cards as they'd like to the deck and draw back up to ten.
        </p>

        <p>
            <span className="bold">Packing Heat</span>:
            For Pick 2s, all players draw an extra card before playing the hand to open up more options.
        </p>

        <p>
            <span className="bold">Rando Cardrissian</span>:
            Every round, pick one random White Card from the pile and place it into play. This card belongs to an imaginary player named Rando Cardrissian, and if he wins the game, all players go home in a state of everlasting shame.
        </p>

        <p>
            <span className="bold">God Is Dead</span>:
            Play without a Card Czar. Each player picks his or her favorite card each round. The card with the most votes wins the round.
        </p>

        <p>
            <span className="bold">Survival of the Fittest</span>:
            After everyone has answered the question, players take turns eliminating one card each. The last remaining card is declared the funniest.
        </p>

        <p>
            <span className="bold">Serious Business</span>:
            Instead of picking a favorite card each round, the Card Czar ranks the top three in order. The best card gets 3 Awesome Points, the second-best gets 2, and the third gets 1. Keep a running tally of the score, and at the end of the game, the winner is declared the funniest, mathematically speaking.
        </p>

        <p>
            <span className="bold">Never Have I Ever</span>:
            At any time, players may discard cards that they don't understand, but they must confess their ignorance to the group and suffer the resulting humiliation.
        </p>

    </div>

export default Rules;