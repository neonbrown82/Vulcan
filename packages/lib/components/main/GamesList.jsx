import React from 'react';
import { Components, withList, Loading } from 'meteor/vulcan:core';

import Games from '../../modules/games/collection.js';
import GamesListItem from './GamesListItem';

const GamesList = ({results = [], loading, loadMore, count, totalCount}) =>

    <div>

        <h2>Games List</h2>

        {loading ?

            <Loading /> :

            <div className="gamesList">
                {results.map(game => <GamesListItem key={game._id} game={game} />)}

                {/* load more */}

                {totalCount > results.length ?
                    <a href="#" onClick={e => {e.preventDefault(); loadMore();}}>Load More {count}/{totalCount})</a> :
                    <p>No more games.</p>
                }

            </div>

        }

    </div>

const options = {
    collection: Games,
    fragmentName: 'GamesItemFragment',
    limit: 5
};

export default withList(options)(GamesList);