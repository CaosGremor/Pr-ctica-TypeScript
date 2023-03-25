"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(_name, _lastName, _age, _dni, _birthday, _favColor, _gender, _addresses, _mails, _phones, _note) {
        this._name = _name;
        this._lastName = _lastName;
        this._age = _age;
        this._dni = _dni;
        this._birthday = _birthday;
        this._favColor = _favColor;
        this._gender = _gender;
        this._addresses = _addresses;
        this._mails = _mails;
        this._phones = _phones;
        this._note = _note;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (lastName) {
            this._lastName = lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "dni", {
        get: function () {
            return this._dni;
        },
        set: function (dni) {
            this._dni = dni;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "birthday", {
        get: function () {
            return this._birthday;
        },
        set: function (birthday) {
            this._birthday = birthday;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "favColor", {
        get: function () {
            return this._favColor;
        },
        set: function (favColor) {
            this._favColor = favColor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "gender", {
        get: function () {
            return this._gender;
        },
        set: function (gender) {
            this._gender = gender;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "addresses", {
        get: function () {
            return this._addresses;
        },
        set: function (addresses) {
            this._addresses = addresses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "mails", {
        get: function () {
            return this._mails;
        },
        set: function (mails) {
            this._mails = mails;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "phones", {
        get: function () {
            return this._phones;
        },
        set: function (phones) {
            this._phones = phones;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "note", {
        get: function () {
            return this._note;
        },
        set: function (note) {
            this._note = note;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.addAddress = function (newAddress) {
        this._addresses.push(newAddress);
    };
    Person.prototype.addMail = function (newMail) {
        this._mails.push(newMail);
    };
    Person.prototype.addPhone = function (newPhone) {
        this._phones.push(newPhone);
    };
    Person.prototype.setAddress = function (newAddress) {
        this._addresses = [newAddress];
    };
    Person.prototype.setMail = function (newMail) {
        this._mails = [newMail];
    };
    Person.prototype.setPhone = function (newPhone) {
        this._phones = [newPhone];
    };
    Person.prototype.getformatBirthday = function () {
        var date = this._birthday;
        var formatBirthday = "".concat(date.getDate(), "/").concat(date.getMonth(), "/").concat(date.getFullYear());
        return formatBirthday;
    };
    Person.prototype.showAllAddresses = function () {
        var allAddresses = '';
        for (var i = 0; i < this._addresses.length; i++) {
            allAddresses = "".concat(allAddresses, "\n\tDirecci\u00F3n ").concat(i + 1, ": ").concat(this._addresses[i].showAddress());
        }
        return allAddresses;
    };
    Person.prototype.showAllPhones = function () {
        var allPhones = '';
        for (var i = 0; i < this._phones.length; i++) {
            allPhones = "".concat(allPhones, "\n\tTel\u00E9fono ").concat(i + 1, ": ").concat(this._phones[i].phoneNumber, " (").concat(this._phones[i].type, ")");
        }
        return allPhones;
    };
    Person.prototype.showAllEmails = function () {
        var allEmail = '';
        for (var i = 0; i < this._mails.length; i++) {
            allEmail = "".concat(allEmail, "\n\tEmail ").concat(i + 1, ": ").concat(this._mails[i].email, " (").concat(this._mails[i].type, ")");
        }
        return allEmail;
    };
    Person.prototype.showPersonInfo = function () {
        var personInfo = "Informaci\u00F3n personal de ".concat(this._name, " ").concat(this._lastName, ":\n\t\t\tNombre: ").concat(this._name, "\n\t\t\tApellidos: ").concat(this._lastName, "\n\t\t\tEdad: ").concat(this._age, "\n\t\t\tDNI: ").concat(this._dni, "\n\t\t\tCumplea\u00F1os: ").concat(this.getformatBirthday(), "\n\t\t\tColor Favorito: ").concat(this._favColor, "\n\t\t\tSexo: ").concat(this._gender, "\n\t\t\tDirecciones: ").concat(this.showAllAddresses(), "\n\t\t\tEmails: ").concat(this.showAllEmails(), "\n\t\t\tTel\u00E9fonos: ").concat(this.showAllPhones(), "\n\t\t\tNotas: ").concat(this._note);
        return personInfo;
    };
    return Person;
}());
exports.Person = Person;
