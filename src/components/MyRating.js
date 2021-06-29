import React from 'react';

export default function MyRating({score}) {
    let isDecimal;
    let roundedScore;
    let emptyScore;

    if (score % 1 != 0) {
        isDecimal = 1;
        roundedScore = Math.floor(score);
        emptyScore = 5 - roundedScore - 1;
    } else {
        isDecimal = 0;
        roundedScore = Math.floor(score);
        emptyScore = 5 - roundedScore;
    }

    return (
        <label className={'pt-1 mr-1'}>
            {[...Array(roundedScore)].map((circle, i) => <label className={'full-rating'} key={i}></label>)}
            {[...Array(isDecimal)].map((circle, i) => <label className={'half-rating'} key={i}></label>)}
            {[...Array(emptyScore)].map((circle, i) => <label className={'empty-rating'} key={i}></label>)}
        </label>
    );
}

