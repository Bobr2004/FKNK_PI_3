const practs_list = document.querySelectorAll(".practice");

console.log(practs_list)


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}


var good_stat_number;

practs_list.forEach(practs => {
    good_stat_number = 0;
    const stats = practs.querySelectorAll(".proffesor .stat");
    console.log(stats);
    stats.forEach(stat => {
        if (stat.classList.contains("good")) {
            good_stat_number = (100 / stats.length) + 8 + randomIntFromInterval(1, 15);
            good_stat_number = Math.round(good_stat_number)
            stat.style.minWidth = good_stat_number + "px";
            stat.style.background = "#2ecc71";
            stat.textContent = good_stat_number + "%";
            // stat.setAttribute("content-data", good_stat_number)
            // stat.setAttribute("data-stat-col", "green");
        }
    })
    stats.forEach(stat => {
        if (!stat.classList.contains("good")) {
            let stat_number = ((100 - good_stat_number)/(stats.length - (good_stat_number != 0)));
            stat_number = Math.round(stat_number)
            stat.style.minWidth = stat_number + "px";
            stat.style.background = "#e74c3c";
            stat.textContent = stat_number + "%";
            // stat.setAttribute("content-data", stat_number);
            // stat.setAttribute("data-stat-col", "red");
        }
    })
})
