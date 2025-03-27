function bake(degree) {
    var message;
    if (degrees > 500) {
        message = "I'm not a refrigerator";
    } else {
        message = "That's avery comfortable temperature for me";
        setMode("Bake");
        setTemp(degrees);
    }
    return message;
}
var status = bake(360);