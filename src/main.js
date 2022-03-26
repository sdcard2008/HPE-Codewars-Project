function showSomeAction() {
    $.getJSON("https://ipapi.co/json/" , function (data) {
        $("div#practical").html("<div id='ip'><p id='ip'>" + data.ip + "</p><p id = ip-data> Your country: " + data.country_name + "<br/> Region: " + data.region + "<br/> City: " + data.city + "</p>")
        
    })
}
