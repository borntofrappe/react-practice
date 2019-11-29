export const getCells = () => {
      // structure of the canvas
    const columns = 21;
    const rows = 21;

    const grid = Array(columns)
    .fill()
    .map((d, column) =>
    Array(rows)
        .fill()
        .map((d, row) => ({
        column,
        row,
        isAlive: Math.random() > 0.5,
        }))
    );
    return grid.reduce((acc, curr) => [...acc, ...curr], []);
}

const patterns = {
    blinkers: [
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxoxxxxxxxxxxxxoxxx',
        'xxxoxxxxxxxxxxxxoxxx',
        'xxxoxxxxxxxxxxxxoxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxoooxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxoooxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxoooxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxoxxxxxxxxxxxxoxxx',
        'xxxoxxxxxxxxxxxxoxxx',
        'xxxoxxxxxxxxxxxxoxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
    ],
    toads: [
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxoxxxxxxxxoxxxxx',
        'xxxoxxoxxxxxxoxxoxxx',
        'xxxoxxoxxxxxxoxxoxxx',
        'xxxxoxxxxxxxxxxoxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
    ],
    beacons: [
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxooxxxxxxxxxxooxxx',
        'xxxoxxxxxxxxxxxxoxxx',
        'xxxxxxoxxxxxxoxxxxxx',
        'xxxxxooxxxxxxooxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
    ],
    pulsar: [
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxoooxxxoooxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxoxxxxoxoxxxxoxxxx',
        'xxxoxxxxoxoxxxxoxxxx',
        'xxxoxxxxoxoxxxxoxxxx',
        'xxxxxoooxxxoooxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxoooxxxoooxxxxxx',
        'xxxoxxxxoxoxxxxoxxxx',
        'xxxoxxxxoxoxxxxoxxxx',
        'xxxoxxxxoxoxxxxoxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxoooxxxoooxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
    ],
    pentaDecathlon: [
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxoxxxxxxxxxx',
        'xxxxxxxxxoxxxxxxxxxx',
        'xxxxxxxxoooxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxoooxxxxxxxxx',
        'xxxxxxxxxoxxxxxxxxxx',
        'xxxxxxxxxoxxxxxxxxxx',
        'xxxxxxxxxoxxxxxxxxxx',
        'xxxxxxxxxoxxxxxxxxxx',
        'xxxxxxxxoooxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxoooxxxxxxxxx',
        'xxxxxxxxxoxxxxxxxxxx',
        'xxxxxxxxxoxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxxxxxxxxxxxxxxxx',
    ],
}

export const getPatterns = () => Object.keys(patterns);

export const getPattern = (key) => {
    const pattern = patterns[key];
    const grid = pattern.map((string, row) => string.split('').map((cell, column) => ({
        column,
        row,
        isAlive: cell === 'o'
    })));


    return grid.reduce((acc, curr) => [...acc, ...curr], []);
}
