var drone = require('ar-drone');
var client = drone.createClient();

module.exports = {
    takeoff: function (params, callback) {
        client.takeoff();
        client.after(10000, function () {
            if (typeof callback === "function") callback();
        });
    },

    land: function (params, callback) {
        client.land();
        client.after(10000, function () {
            if (typeof callback === "function") callback();
        });
    },

    fly: function (params, callback) {
        if (params.time == undefined)
            throw "time is a required parameter";
        if (params.speed == undefined)
            throw "speed is a required parameter";
        if (params.direction == undefined)
            throw "direction is a required parameter";

        params.speed = params.speed / 100;

        switch (params.direction) {
            case "front":
                client.front(params.speed).after(params.time, function () {
                    client.stop();
                    if (typeof callback === "function") callback();
                });
                break;
            case "back":
                client.back(params.speed).after(params.time, function () {
                    client.stop();
                    if (typeof callback === "function") callback();
                });
                break;
            case "left":
                client.left(params.speed).after(params.time, function () {
                    client.stop();
                    if (typeof callback === "function") callback();
                });
                break;
            case "right":
                client.right(params.speed).after(params.time, function () {
                    client.stop();
                    if (typeof callback === "function") callback();
                });
                break;
            case "up":
                client.up(params.speed).after(params.time, function () {
                    client.stop();
                    if (typeof callback === "function") callback();
                });
                break;
            case "down":
                client.down(params.speed).after(params.time, function () {
                    client.stop();
                    if (typeof callback === "function") callback();
                });
                break;
        }
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
                client.clockwise(params.speed).after(params.time, function () {
                    client.stop();
                    if (typeof callback === "function") callback();
                });
                break;
            case "ccw":
                client.counterClockwise(params.speed).after(params.time, function () {
                    client.stop();
                    if (typeof callback === "function") callback();
                });
                break;
        }
    }
};