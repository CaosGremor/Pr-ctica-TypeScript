"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
var Address = /** @class */ (function () {
    function Address(_street, _number, _floor, _letter, _zipCode, _village, _province) {
        this._street = _street;
        this._number = _number;
        this._floor = _floor;
        this._letter = _letter;
        this._zipCode = _zipCode;
        this._village = _village;
        this._province = _province;
    }
    Object.defineProperty(Address.prototype, "street", {
        get: function () {
            return this._street;
        },
        set: function (street) {
            this._street = street;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "number", {
        get: function () {
            return this._number;
        },
        set: function (number) {
            this._number = number;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "floor", {
        get: function () {
            return this._floor;
        },
        set: function (floor) {
            this._floor = floor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "letter", {
        get: function () {
            return this._letter;
        },
        set: function (letter) {
            this._letter = letter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "zipCode", {
        get: function () {
            return this._zipCode;
        },
        set: function (zipCode) {
            this._zipCode = zipCode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "village", {
        get: function () {
            return this._village;
        },
        set: function (village) {
            this._village = village;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "province", {
        get: function () {
            return this._province;
        },
        set: function (province) {
            this._province = province;
        },
        enumerable: false,
        configurable: true
    });
    Address.prototype.showAddress = function () {
        var address = " ".concat(this._street, ", ").concat(this._number, " ").concat(this._floor, "\u00BA").concat(this._letter, "\n\t\t\t\t\t\t").concat(this._zipCode, " ").concat(this._village, " (").concat(this._province, ")");
        return address;
    };
    return Address;
}());
exports.Address = Address;
