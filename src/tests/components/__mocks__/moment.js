const moment = require.requireActual('moment');

// if moment is callend with no args moment(), return moment(0) insted
export default (timestamp = 0) => {
    return moment(timestamp);
}