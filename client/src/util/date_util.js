export default function getDateRange() {
    let currDate = new Date();
    let currYear = currDate.getFullYear();
    let currMonth = currDate.getMonth();

    return {
        start: new Date(Date.UTC(currYear, currMonth)).valueOf(),
        end: new Date(Date.UTC(currYear, currMonth + 1, 0, 23, 59, 59, 999)).valueOf()
    }

}