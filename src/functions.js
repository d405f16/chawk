var drone = require('ar-drone');
var client = drone.createClient();

module.exports = {
    takeoff: function (params, callback) {
        client.takeoff();
        client.after(5000, function () {
            if (typeof callback === "function") callback();
        });
    },

    land: function (params, callback) {
        client.land();
        setTimeout(function () {
            client.stop();
            if (typeof callback === "function") callback();
        }, 5000);
    },

    fly: function (params, callback) {
        if (params.time == undefined)
            throw "time is a required parameter";
        if (params.speed == undefined)
            throw "speed is a required parameter";
        if (params.direction == undefined)
            throw "direction is a required parameter";

        params.speed = params.speed / 100;
        params.time = params.time * 1000;

        switch (params.direction) {
            case "front":
                client.front(params.speed);
                break;
            case "back":
                client.back(params.speed);
                break;
            case "left":
                client.left(params.speed);
                break;
            case "right":
                client.right(params.speed);
                break;
            case "up":
                client.up(params.speed);
                break;
            case "down":
                client.down(params.speed);
                break;
        }

        setTimeout(function () {
            client.stop();
            if (typeof callback === "function") callback();
        }, params.time)
    },

    rotate: function (params, callback) {
        if (params.time == undefined)
            throw "time is a required parameter";
        if (params.speed == undefined)
            throw "speed is a required parameter";
        if (params.direction == undefined)
            throw "direction is a required parameter";

        params.speed = params.speed / 100;

        switch (params.direction) {
            case "cw":
                client.clockwise(params.speed);
                break;
            case "ccw":
                client.counterClockwise(params.speed);
                break;
        }

        setTimeout(function () {
            client.stop();
            if (typeof callback === "function") callback();
        }, params.time)
    }
};