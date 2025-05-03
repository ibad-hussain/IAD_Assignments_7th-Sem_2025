let count = 0;
const countEl = document.getElementById("count");

function updateCount(change) {
    count += change;
    countEl.textContent = count;
}

function resetCount() {
    count = 0;
    countEl.textContent = count;
}
