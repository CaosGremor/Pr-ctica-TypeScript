import { Person } from './person';
import { Address } from './address';
import { Mail } from './mail';
import { Phone } from './phone';

function buildAgenda(): Array<Person> 
    {
        let agenda: Array<Person> = [];

        const addressPerson0: Address = new Address('Calle de Lezo', 7, 3, 'C', 28041, 'Madrid', 'Madrid');
        const person0: Person = new Person('Guillermo', 'Garcia', 25, '51526738E', new Date(1998, 3, 14), 'Azul', 'Hombre', [addressPerson0], [new Mail('Personal', 'guillegarcia98@gmail.com')], [new Phone('Personal móvil', 666345678)], 'Amigo primaria');

        const addressPerson1: Address = new Address('Calle de Centenera', 29, 1, 'B', 28017, 'Madrid', 'Madrid');
        const person1: Person = new Person( 'Adelaida', 'Aguas', 62, '51524789Z', new Date(1960, 23, 8), 'Rosa', 'Mujer', [addressPerson1], [new Mail('Personal', 'aaguas@gmail.com')], [new Phone('Trabajo móvil', 625234562)], 'Abuelita');

        const addressPerson2: Address = new Address('Calle de Méndez Álvaro', 84, 0, 'S/N', 28053, 'Madrid', 'Madrid');
        const person2: Person = new Person('Francisco Javier', 'Marcide', 59, '45668964P', new Date(1963, 12, 12), 'Negro', 'Hombre', [addressPerson2], [new Mail('Trabajo', 'fcomarcide@renfe.es')], [new Phone('Trabajo móvil', 622456200)], 'Jefe');

        agenda.push(person0);
        agenda.push(person1);
        agenda.push(person2);

        return agenda;
    }

function showAgenda(agenda: Array<Person>): void 
    {
        for (const person of agenda) {
            console.log(person.showPersonInfo());
        }
    }

function addNewPersonData(
    dniNumber: string,
    newAddress: Address,
    newMail: Mail,
    newPhone: Phone): void 
    {
        for (const person of agenda) {
            if (person.dni === dniNumber) {
                person.addAddress(newAddress);
                person.addMail(newMail);
                person.addPhone(newPhone);
            }
        }
    }

    
let agenda = buildAgenda();
showAgenda(agenda);

const dniPerson2: string = '45668964P';
const newAddressPerson2: Address = new Address('Calle de Goya', 121, 12, 'F', 28009, 'Madrid', 'Madrid');
const newMailPerson2: Mail = new Mail('Personal', 'jmarcide2@gmail.com');
const newPhonePerson2: Phone = new Phone('Personal móvil', 645234569);

addNewPersonData(dniPerson2, newAddressPerson2, newMailPerson2, newPhonePerson2);

showAgenda(agenda);