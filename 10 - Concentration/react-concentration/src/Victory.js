import React from 'react';

function Victory({ reset }) {

    return(
    <section>
        <h1>Congrats</h1>
        <button onClick={() => reset()}>Play again</button>
    </section>
    );
}

export default Victory;