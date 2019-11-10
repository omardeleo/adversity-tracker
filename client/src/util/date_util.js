let currentDate = new Date();
let [thisMonth, today, thisYear] = [currentDate.getMonth(),
    currentDate.getDate(),
    currentDate.getFullYear()];

//Eventually change startDate to user account "created date"
//For now setting to Aug 1, 2019 -when the tool was created
let startDate = new Date(Date.UTC(2019, 7, 1)).valueOf();
let endDate = new Date(Date.UTC(thisYear, thisMonth, today + 2)).valueOf();
let zoomDate = new Date(Date.UTC(thisYear, thisMonth, today - 7)).valueOf();
let timezoneOffset = -currentDate.getTimezoneOffset()

export const getDateRange = () => {
    return {
        start: startDate,
        zoom: zoomDate,
        end: endDate,
        tzOffset: timezoneOffset
    }
}

export const displayMonth = () => {
    return currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
}