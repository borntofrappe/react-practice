// function creating a grid of dead or alive cells
export const createGrid = () => {
    // the number of columns and rows is currently hard-coded
    // structure of the canvas
    const columns = 21;
    const rows = 19;

    const grid = Array(columns)
    .fill()
    .map((d, column) =>
    Array(rows)
        .fill()
        .map((d, row) => ({
        column,
        row,
        isAlive: Math.random() > 0.75,
        }))
    );

    // describe the structure of the grid and the 1 dimensional array detailing the individual cells
    const cells = grid.reduce((acc, curr) => [...acc, ...curr], []);
    return ({
        columns,
        rows,
        cells,
    });
}

// hard coded values for a few patterns
// always in a 21x19 grid
const patterns = {
    accident: [
        'xxxxxxxxxxxxxxxxxxxxx',
        'xxxxoxxxxxoxxxxxoxxxx',
        'xxxxoxxxxxoxxxxxoxxxx',
        'xxxxoxxxxxoxxxxxoxxxx',
        'xxxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxoooxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxoooxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxoooxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxxx',
        'xxxxoxxxxxoxxxxxoxxxx',
        'xxxxoxxxxxoxxxxxoxxxx',
        'xxxxoxxxxxoxxxxxoxxxx',
        'xxxxxxxxxxxxxxxxxxxxx',
    ],
    pulsar: [
        'xxxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxxx',
        'xxxxxxoooxxxoooxxxxxx',
        'xxxxxxxxxxxxxxxxxxxxx',
        'xxxxoxxxxoxoxxxxoxxxx',
        'xxxxoxxxxoxoxxxxoxxxx',
        'xxxxoxxxxoxoxxxxoxxxx',
        'xxxxxxoooxxxoooxxxxxx',
        'xxxxxxxxxxxxxxxxxxxxx',
        'xxxxxxoooxxxoooxxxxxx',
        'xxxxoxxxxoxoxxxxoxxxx',
        'xxxxoxxxxoxoxxxxoxxxx',
        'xxxxoxxxxoxoxxxxoxxxx',
        'xxxxxxxxxxxxxxxxxxxxx',
        'xxxxxxoooxxxoooxxxxxx',
        'xxxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxxx',
    ],
    pentaDecathlon: [
        'xxxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxoxxxxxxxxxx',
        'xxxxxxxxxxoxxxxxxxxxx',
        'xxxxxxxxxoooxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxoooxxxxxxxxx',
        'xxxxxxxxxxoxxxxxxxxxx',
        'xxxxxxxxxxoxxxxxxxxxx',
        'xxxxxxxxxxoxxxxxxxxxx',
        'xxxxxxxxxxoxxxxxxxxxx',
        'xxxxxxxxxoooxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxoooxxxxxxxxx',
        'xxxxxxxxxxoxxxxxxxxxx',
        'xxxxxxxxxxoxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxxx',
    ],
}

// function retrieving the string value for each pattern
export const getPatterns = () => Object.keys(patterns);

// function returning the grid for the input pattern
export const getPattern = (key) => {
    const pattern = patterns[key];
    const columns = pattern[0].length;
    const rows = pattern.length;

    const grid = pattern
        .map((string, row) => string
            .split('')
            .map((cell, column) => ({
                column,
                row,
                isAlive: cell === 'o'
            })));

    const cells = grid.reduce((acc, curr) => [...acc, ...curr], []);
    return ({
        columns,
        rows,
        cells,
    });
}
