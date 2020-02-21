'use strict';

function House(name) {
    this._name = name;
    this._devices = [];
}

House.prototype.getName = function() {
    return this._name;
};

House.prototype.setName = function(name) {
    this._name = name;
};

House.prototype.addDevice = function(device) {
    this._devices.push(device);
};

House.prototype.getDevice = function(name) {
    function check(value) {
        return value.getName() == name;
    }
    return this.getAllDevices().find(check);
};

House.prototype.delDevice = function(name) {
    var device = this.getDevice(name);
    var index = this._devices.indexOf(device);
    this._devices.splice(index, 1);
};

House.prototype.getAllDevices = function() {
    return this._devices;
};
