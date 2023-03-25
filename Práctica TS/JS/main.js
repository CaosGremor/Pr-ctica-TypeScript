"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("../TS/person");
var address_1 = require("../TS/address");
var mail_1 = require("../TS/mail");
var phone_1 = require("../TS/phone");
function buildAgenda() {
    var agenda = [];
    var addressPerson0 = new address_1.Address('Calle de Lezo', 7, 3, 'C', 28041, 'Madrid', 'Madrid');
    var person0 = new person_1.Person('Guillermo', 'Garcia', 25, '51526738E', new Date(1998, 3, 14), 'Azul', 'Hombre', [addressPerson0], [new mail_1.Mail('Personal', 'guillegarcia98@gmail.com')], [new phone_1.Phone('Personal móvil', 666345678)], 'Amigo primaria');
    var addressPerson1 = new address_1.Address('Calle de Centenera', 29, 1, 'B', 28017, 'Madrid', 'Madrid');
    var person1 = new person_1.Person('Adelaida', 'Aguas', 62, '51524789Z', new Date(1960, 23, 8), 'Rosa', 'Mujer', [addressPerson1], [new mail_1.Mail('Personal', 'aaguas@gmail.com')], [new phone_1.Phone('Trabajo móvil', 625234562)], 'Abuelita');
    var addressPerson2 = new address_1.Address('Calle de Méndez Álvaro', 84, 0, 'S/N', 28053, 'Madrid', 'Madrid');
    var person2 = new person_1.Person('Francisco Javier', 'Marcide', 59, '45668964P', new Date(1963, 12, 12), 'Negro', 'Hombre', [addressPerson2], [new mail_1.Mail('Trabajo', 'fcomarcide@renfe.es')], [new phone_1.Phone('Trabajo móvil', 622456200)], 'Jefe');
    agenda.push(person0);
    agenda.push(person1);
    agenda.push(person2);
    return agenda;
}
function showAgenda(agenda) {
    for (var _i = 0, agenda_1 = agenda; _i < agenda_1.length; _i++) {
        var person = agenda_1[_i];
        console.log(person.showPersonInfo());
    }
}
function addNewPersonData(dniNumber, newAddress, newMail, newPhone) {
    for (var _i = 0, agenda_2 = agenda; _i < agenda_2.length; _i++) {
        var person = agenda_2[_i];
        if (person.dni === dniNumber) {
            person.addAddress(newAddress);
            person.addMail(newMail);
            person.addPhone(newPhone);
        }
    }
}
var agenda = buildAgenda();
showAgenda(agenda);
var dniPerson2 = '45668964P';
var newAddressPerson2 = new address_1.Address('Calle de Goya', 121, 12, 'F', 28009, 'Madrid', 'Madrid');
var newMailPerson2 = new mail_1.Mail('Personal', 'jmarcide2@gmail.com');
var newPhonePerson2 = new phone_1.Phone('Personal móvil', 645234569);
addNewPersonData(dniPerson2, newAddressPerson2, newMailPerson2, newPhonePerson2);
showAgenda(agenda);
