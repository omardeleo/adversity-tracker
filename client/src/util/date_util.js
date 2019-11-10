let currentDate = new Date();
let [thisMonth, today, thisYear] = [currentDate.getMonth(),
    currentDate.getDate(),
    currentDate.getFullYear()];
let startDate = new Date(Date.UTC(thisYear, thisMonth, today - 30)).valueOf();
let endDate = new Date(Date.UTC(thisYear, thisMonth, today + 2)).valueOf();
let zoomDate = new Date(Date.UTC(thisYear, thisMonth, today - 7)).valueOf();

export const getDateRange = () => {
    return {
        start: startDate,
        zoom: zoomDate,
        end: endDate
    }
}

export const displayMonth = () => {
    return currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
}