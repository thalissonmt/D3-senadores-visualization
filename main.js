
var array = []
d3.csv("ListaParlamentar.csv", function (row) {
    if (row["ListaParlamentarEmExercicio.Parlamentares.Parlamentar.IdentificacaoParlamentar.UrlFotoParlamentar"] != "") {
        if (!array.some(e => e.picture === row["ListaParlamentarEmExercicio.Parlamentares.Parlamentar.IdentificacaoParlamentar.UrlFotoParlamentar"])) {
            array.push({
                picture: row["ListaParlamentarEmExercicio.Parlamentares.Parlamentar.IdentificacaoParlamentar.UrlFotoParlamentar"],
                name: row["ListaParlamentarEmExercicio.Parlamentares.Parlamentar.IdentificacaoParlamentar.NomeParlamentar"],
                party: row["ListaParlamentarEmExercicio.Parlamentares.Parlamentar.IdentificacaoParlamentar.SiglaPartidoParlamentar"],
                id: row["ListaParlamentarEmExercicio.Parlamentares.Parlamentar.IdentificacaoParlamentar.CodigoParlamentar"],
                visited: false
            });
        }
    }
}).then(function (d){
    d3.select("svg").select("g").selectAll("g").each(function () {

        const partyID = d3.select(this).attr("id").split("_")[1];

        d3.select(this).selectAll("circle").each(function () {
            var flag = false;
            array.forEach(element => {
                if (partyID == element.party && element.visited == false && flag == false) {
                    d3.select(this).attr("id", element.id);
                    element.visited = true;
                    flag = true;
                }
            });
        });
    });
});


d3.select("svg")
    .selectAll("circle")
    .on("mouseover", function (d) {
        d3.select(this).attr("stroke", "purple").attr("stroke-width", 2);
    })
    .on("mouseout", function (d) {
        d3.select(this).attr("stroke-width", 0);
    })
    .on("click", function () {
        var id = d3.select(this).attr("id");
        array.forEach(element => {
            if (element.id == id) {
                d3.select("div").select("img").attr("src", element.picture);
                d3.select("div").select("div").select("h4").text(element.name);
                d3.select("div").select("div").select("p").text(element.party);
            }
        });
    })
