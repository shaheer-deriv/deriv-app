import moment from 'moment';

/**
 * Function that converts a numerical epoch value into a Moment instance
 */
export const epochToMoment = (epoch: number) => moment.unix(epoch).utc();

/**
 * Function that takes a primitive type and converts it into a Moment instance
 */
export const toMoment = (value?: moment.MomentInput): moment.Moment => {
    if (!value) return moment().utc(); // returns 'now' moment object
    if (moment.isMoment(value) && value.isValid() && value.isUTC()) return value; // returns if already a moment object
    if (typeof value === 'number') return epochToMoment(value); // returns epochToMoment() if not a date

    if (/invalid/i.test(moment(value).toString())) {
        const todayMoment = moment();
        const daysInMonth = todayMoment.utc().daysInMonth();
        const valueAsNumber = moment.utc(value, 'DD MMM YYYY').valueOf() / (1000 * 60 * 60 * 24);
        return valueAsNumber > daysInMonth
            ? moment.utc(todayMoment.add(value.valueOf(), 'd'), 'DD MMM YYYY')
            : moment.utc(value, 'DD MMM YYYY'); // returns target date
    }
    return moment.utc(value);
};

/**
 * return the number of days since the date specified
 * @param  {String} date   the date to calculate number of days since
 * @return {Number} an integer of the number of days
 */
export const daysSince = (date: string) => {
    const diff = toMoment().startOf('day').diff(toMoment(date).startOf('day'), 'days');
    return !date ? '' : diff;
};
