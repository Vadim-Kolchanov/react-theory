import React, {Fragment} from 'react';
import {Search} from "../components/Search";
import {Card} from "../components/Card";

export const Home = () => {

    const cards = new Array(15)
        .fill('')
        .map((_, i) => i);

    return (
        <Fragment>
            <Search/>

            <div className="row mt-3">
                {cards.map(card => (
                    <div key={card} className="col-sm-4 mb-4">
                        <Card/>
                    </div>
                ))}
            </div>
        </Fragment>
    );
};