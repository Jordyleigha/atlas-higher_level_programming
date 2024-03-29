$.getJSON("https://hellosalut.stefanbohacek.dev/?lang=fr", function(resp){
    $("#hello").text(resp.hello);
});