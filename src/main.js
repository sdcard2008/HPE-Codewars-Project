function showSomeAction() {
    $.getJSON("http://ip-api.com/json" , function (data) {
        $("div#practical").html("<div id='ip'><p id='ip'>" + data.query + "</p><p id = ip-data> Your country: " + data.country + "<br/> Region: " + data.region + "<br/> City: " + data.city + "</p>")
        
    })
}