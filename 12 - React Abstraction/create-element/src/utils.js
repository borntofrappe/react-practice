/* logic used to format the date instance */
const options = {
    year: 'numeric',
    month: "short",
    day: "numeric",
};
const format = new Intl.DateTimeFormat("en-US-u-ca-gregory", options);

export function formatDate(date) {
    // compute the lapse between the input date and the input instance
    const now = new Date();
    const milliseconds = now - date;
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    /*
    the goal is to show the number of hours, or minutes, or seconds from the date received as input
    if the lapse is greater than a day, the international API is used to show the following instead
    YYYY, Abbreviated Month, DD
    */
    let delta;
    if(hours >= 24) {
        delta = format.format(date);
    } else if(hours > 0) {
        delta = `${hours}h`;
    } else if(minutes > 0) {
        delta = `${minutes}m`;
    } else if(seconds > 0) {
        delta = `${seconds}s`;
    } else {
        delta = 'Now';
    }

    return delta;
}