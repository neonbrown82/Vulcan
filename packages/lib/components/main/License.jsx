import React, { PropTypes, Component } from 'react';

const licenseUrl = "http://creativecommons.org/licenses/by-nc-sa/2.0/";

const License = () =>

    <div>

        {/*
            TODO: pepper in commentary as it applies to THIS game
            TODO: add menu to toggle between rules and license
        */}

        <h2>
            Terms of Use
        </h2>

        <p>
            Cards Against Humanity is free to use under the Creative Commons BY-NC-SA 2.0 License. You can read more about the license at <a href={licenseUrl}>{licenseUrl}</a>.
        </p>

        <p>
            These are the terms of the copyright:
        </p>

        <p>
            <span className="bold">Attribution</span>:
            If you distribute our game, give us credit for the content.<br />
            <span className="bold">Noncommercial</span>:
            You can't sell our game or any derivative of our game for money or sexual favors.<br />
            <span className="bold">Share Alike</span>:
            If you modify and/or distribute our game, you must use the Creative Commons BY-NC-SA 2.0 License.
        </p>

        <p>
            You must also comply with the Laws of Man and Nature. Don't use any form of this game for nefarious purposes like libel, slander, diarrhea, copyright infringement, harassment, or death. If you break the law and get in trouble for it, Cards Against Humanity is free of all liability.
        </p>

    </div>

export default License;