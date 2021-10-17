import {Vehicle} from './vehicleBaseClass.js'

class Sedan extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 6;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 200;
        this.fuel = 100;
        this.scheduleService = false;
    }

    loadPassenger(num) {
        if(this.passenger < this.maximumPassengers) {
            //We can add more passengers
            if((num+this.passenger) <= this.maximumPassengers) {
                this.passenger = num;
                console.log("Passenger Count: ",this.passenger);
                return this.passenger;
            }
        } else {
            console.log("Out of space!")
        }
    }

    start() {
        super.start();
    }

    scheduleService(mileage) {
        if(mileage > 30000) {
            this.scheduleService = true;
            console.log("Service has been scheduled!");
            return this.scheduleService;
        }
    }
}