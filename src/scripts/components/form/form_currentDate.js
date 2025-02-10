function getCurrentDateTime() {
    const now = new Date();

    const optionsDay = {weekday: 'short'};
    const dayName = now.toLocaleDateString('es-ES', optionsDay).slice(0, 3);
    const capitalizedDayName = dayName.charAt(0).toUpperCase() + dayName.slice(1);
    
    const optionsMonth = { month: 'long' };
    let monthName = now.toLocaleDateString('es-ES', optionsMonth);
    monthName = monthName.charAt(0).toUpperCase() + monthName.slice(1);

    const day = now.getDate();
    const year = now.getFullYear();

    return `${dayName}.  ${day} ${monthName} ${year}`;
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('currentDate').textContent = getCurrentDateTime();
});