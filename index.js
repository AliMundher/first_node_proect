const fetch = require("node-fetch");

function getData(year, countryCode) {
    fetch(`https://date.nager.at/api/v2/publicholidays/${year}/${countryCode}`)
        .then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data)
        });
}
getData(2017, "be");