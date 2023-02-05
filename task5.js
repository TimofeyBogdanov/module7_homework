// Переписать консольное приложение из предыдущего юнита на классы.

let totalPowerConsumption = 0;

class ElectricalAppliance {
    constructor(power) {
        this.power = power;
        this.isActive = false;
    }

    turnOn() {
        if (this.isActive === true)
            return;
        else {
            this.isActive = true;
            totalPowerConsumption += this.power;
        }
    }

    turnOff() {
        if (this.isActive === false)
            return;
        else {
            this.isActive = false;
            totalPowerConsumption -= this.power;
        }
    }
}

class Lamp extends ElectricalAppliance {
    constructor(lampType, brightness, power) {
        super(power);
        this.lampType = lampType;
        this.brightness = brightness;
    }

    increaseBrightness(brightness) {
        if (this.isActive) {
            this.brightness += brightness;
            console.log(`Яркость увеличена до ${this.brightness}`);
        } else
            console.log('Чтобы регулировать яркость, включите светильник');
    }

    decreaseBrightness(brightness) {
        if (this.isActive) {
            this.brightness -= brightness;
            console.log(`Яркость уменьшена до ${this.brightness}`);
        } else
            console.log('Чтобы регулировать яркость, включите светильник');
    }
}

class Computer extends ElectricalAppliance {
    constructor(CPU, memoryType, power) {
        super(power);
        this.CPU = CPU;
        this.memoryType = memoryType;
        this.driveIsOpen = false;
    }

    toggleDrive() {
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
}

const deskLamp = new Lamp('LED', 10, 30);
const PC = new Computer('Intel', 'SSD', 100);
const laptop = new Computer('AMD', 'HDD', 80);

deskLamp.turnOff();
deskLamp.increaseBrightness(10);
deskLamp.decreaseBrightness(5);

PC.turnOn();
PC.toggleDrive();
PC.toggleDrive();

laptop.turnOn();

console.log(`Суммарная потребляемая мощность в данный момент - ${totalPowerConsumption}`);