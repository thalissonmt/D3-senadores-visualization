
console.log(d3.select("svg").selectAll("circle").size());
d3.csv("https://raw.githubusercontent.com/nivan/testPython/main/ListaParlamentarEmExercicio.csv").then(function (data) {
    console.log(data);
})
d3.select("svg")
    .selectAll("circle")
    .on("mouseover", function (d) {
        d3.select(this).attr("stroke", "purple").attr("stroke-width", 2);
    })
    .on("mouseout", function (d) {
        d3.select(this).attr("stroke-width", 0);
    })
    .on("click", function () {
        console.log("click event")
    })