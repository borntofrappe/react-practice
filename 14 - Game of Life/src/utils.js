export const getCells = ({ columns, rows }) => {
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