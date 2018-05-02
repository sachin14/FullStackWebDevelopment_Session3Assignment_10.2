//class airplane

class Airplane{
    constructor(name, occupancy, speed){
        //validating data
        //name cannot be empty check
        if(name == undefined || name == ''){
            throw new Error("Enter valid name. It cannot be empty")
            
        }
        else
            this.name = name;
        
        //validating data
        //Occupancy cannot be empty or cannot be more than 180
        if(occupancy == undefined || occupancy == '' || occupancy > 180  || occupancy < 0){
            throw new Error("Occupancy cannot be empty, negative or more than 180")
        }
        else
            this.occupancy = occupancy;
        
        //validating data
        //Speed cannot be empty or cannot be more than 180

        if(speed == undefined || speed == '' || speed > 900  || speed < 0){
            throw new Error("Speed cannot be empty, negative or more than 900")
        }
        else
            this.speed = speed;

    }
    
    //Method status prints Airplane's status on console
    status(){
        console.log("Airplane: " + this.name + " with " + this.occupancy + " occupancy, is moving at " +  this.speed + " Km/hr.");
    }

    //method to increase the speed
    increaseSpeed(addSpeed){
        this.speed = this.speed + addSpeed;
    }

    //method to decrease the speed
    reduceSpeed(reduceSpeed){
        this.speed = this.speed - reduceSpeed;
    }
}

//instantiate class Airplane object
let airplane1 = new Airplane("Boeing 777", 180, 100);
airplane1.status();
airplane1.increaseSpeed(200);
airplane1.status();

let airplane2 = new Airplane("Boeing 1200", 120, 200);
airplane2.status();
airplane2.increaseSpeed(200);
airplane2.status();

let airplane3 = new Airplane("Airbus 333", 100, 300);
airplane3.status();
airplane3.increaseSpeed(200);
airplane3.status();