// Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

// Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 

// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

// План:

// Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
// Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
// Создайте экземпляры каждого прибора.
// Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)

let totalPowerConsumption = 0;

function ElectricalAppliance(power) {
    this.power = power;
    this.isActive = false;
}

ElectricalAppliance.prototype.turnOn = function () {
    if (this.isActive === true)
        return;
    else {
        this.isActive = true;
        totalPowerConsumption += this.power;
    }
}

ElectricalAppliance.prototype.turnOff = function () {
    if (this.isActive === false)
        return;
    else {
        this.isActive = false;
        totalPowerConsumption -= this.power;
    }
}

function Lamp(power, lampType, brightness) {
    this.power = power;
    this.lampType = lampType;
    this.brightness = brightness;
}

Lamp.prototype = new ElectricalAppliance();

Lamp.prototype.increaseBrightness = function (brightness) {
    if (this.isActive) {
        this.brightness += brightness;
        console.log(`Яркость увеличена до ${this.brightness}`);
    } else 
        console.log('Чтобы регулировать яркость, включите светильник');
}

Lamp.prototype.decreaseBrightness = function (brightness) {
    if (this.isActive) {
        this.brightness -= brightness;
        console.log(`Яркость уменьшена до ${this.brightness}`);
    } else
        console.log('Чтобы регулировать яркость, включите светильник');
}

function Computer(power, CPU, memoryType) {
    this.power = power;
    this.CPU = CPU;
    this.memoryType = memoryType;
    this.driveIsOpen = false;
}

Computer.prototype = new ElectricalAppliance();

Computer.prototype.toggleDrive = function () {
    if (this.isActive) {
        if (!this.driveIsOpen) {
            this.driveIsOpen = true;
            console.log('Дисковод открыт');
        } else {
            this.driveIsOpen = false;
            console.log('Дисковод закрыт');
        }
    } else
        console.log('Чтобы взаимодействовать с дисководом, включите компьютер');
}

const deskLamp = new Lamp(30, 'LED', 10);
const PC = new Computer(100, 'Intel', 'SSD');
const laptop = new Computer(80, 'AMD', 'HDD');

deskLamp.turnOff();
deskLamp.increaseBrightness(10);
deskLamp.decreaseBrightness(5);

PC.turnOn();
PC.toggleDrive();
PC.toggleDrive();

laptop.turnOn();

console.log(`Суммарная потребляемая мощность в данный момент - ${totalPowerConsumption}`);