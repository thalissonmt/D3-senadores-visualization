
var array = []
d3.csv("ListaParlamentar.csv", function (row) {
    if (row["ListaParlamentarEmExercicio.Parlamentares.Parlamentar.IdentificacaoParlamentar.UrlFotoParlamentar"] != "") {
        if (!array.some(e => e.picture === row["ListaParlamentarEmExercicio.Parlamentares.Parlamentar.IdentificacaoParlamentar.UrlFotoParlamentar"])) {
            array.push({
                picture: row["ListaParlamentarEmExercicio.Parlamentares.Parlamentar.IdentificacaoParlamentar.UrlFotoParlamentar"],
                name: row["ListaParlamentarEmExercicio.Parlamentares.Parlamentar.IdentificacaoParlamentar.NomeParlamentar"],
                party: row["ListaParlamentarEmExercicio.Parlamentares.Parlamentar.IdentificacaoParlamentar.SiglaPartidoParlamentar"],
                id: row["ListaParlamentarEmExercicio.Parlamentares.Parlamentar.IdentificacaoParlamentar.CodigoParlamentar"],
            });
        }
    }
})

console.log(array);
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

d3.select("svg").select("g").selectAll("g").each(function () {
    console.log(d3.select(this).attr("id"));
});