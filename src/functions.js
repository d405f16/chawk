module.exports = function (client, navdata) {
    console.log(navdata);

    function options(param, callback) {
        console.log("setting options");
        switch (param) {
            case "name":
                console.log("settings name");
                client.options('NETWORK:ssid_single_player', param.name);
                break;
            case "outdoor":
                client.options('CONTROL:outdoor', param.outdoor);
                break;
        }
    }

    function takeoff(param, callback) {
        client.takeoff();
        setTimeout(function () {
            client.stop();
            if (typeof callback === "function") callback();
        }, 5000);
    }

    function land(param, callback) {
        client.land();
        setTimeout(function () {
            client.stop();
            if (typeof callback === "function") callback();
        }, 5000);
    }

    function fly(param, callback) {
        if (param.time == undefined)
            throw "time is a required parameter";
        if (param.speed == undefined)
            throw "speed is a required parameter";
        if (param.direction == undefined)
            throw "direction is a required parameter";

        var speed = param.speed / 100;
        var time = param.time * 1000;

        switch (param.direction) {
            case "front":
                client.front(speed);
                break;
            case "back":
                client.back(speed);
                break;
            case "left":
                client.left(speed);
                break;
            case "right":
                client.right(speed);
                break;
            case "up":
                client.up(speed);
                break;
            case "down":
                client.down(speed);
                break;
        }

        setTimeout(function () {
            client.stop();
            if (typeof callback === "function") callback();
        }, time)
    }

    function rotate(param, callback) {
        if (param.time == undefined)
            throw "time is a required parameter";
        if (param.speed == undefined)
            throw "speed is a required parameter";
        if (param.direction == undefined)
            throw "direction is a required parameter";

        var speed = param.speed / 100;
        var time = param.time * 1000;

        switch (param.direction) {
            case "cw":
                client.clockwise(speed);
                break;
            case "ccw":
                client.counterClockwise(speed);
                break;
        }

        setTimeout(function () {
            client.stop();
            if (typeof callback === "function") callback();
        }, time)
    }

    function animate(param, callback) {
        var animation = param.animation;
        var time = param.time * 1000;

        client.animate(animation, time);
        setTimeout(function () {
            client.stop();
            if (typeof callback === "function") callback();
        }, time)
    }

    return {
        options: options,
        takeoff: takeoff,
        land: land,
        fly: fly,
        rotate: rotate,
        animate: animate
    }
};