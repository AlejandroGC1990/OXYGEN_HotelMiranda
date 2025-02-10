function getCurrentDateTime() {
    const now = new Date();

    const optionsDay = {weekday: 'short'};
    const dayName = now.toLocaleDateString('en-US', optionsDay).slice(0, 3);
    const capitalizedDayName = dayName.charAt(0).toUpperCase() + dayName.slice(1);
    
    const optionsMonth = { month: 'long' };
    let monthName = now.toLocaleDateString('en-US', optionsMonth);
    monthName = monthName.charAt(0).toUpperCase() + monthName.slice(1);

    const day = now.getDate();
    const year = now.getFullYear();

    return `${capitalizedDayName}.  ${day} ${monthName} ${year}`;
}

function getFutureDateTime(daysToAdd) {
    const now = new Date();
    now.setDate(now.getDate() + daysToAdd);  // Sumar los días

    const optionsDay = { weekday: 'short' };
    const dayName = now.toLocaleDateString('en-US', optionsDay).slice(0, 3);
    const capitalizedDayName = dayName.charAt(0).toUpperCase() + dayName.slice(1);

    const optionsMonth = { month: 'long' };
    let monthName = now.toLocaleDateString('en-US', optionsMonth);
    monthName = monthName.charAt(0).toUpperCase() + monthName.slice(1);

    const day = now.getDate();
    const year = now.getFullYear();

    return `${capitalizedDayName}. ${day}th ${monthName} ${year}`;
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('currentDate').textContent = getCurrentDateTime();

    document.getElementById('futureDate').textContent = getFutureDateTime(3);
});