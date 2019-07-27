/**
* Makecode block for DS18B20 one-wire temperature sensor
* 
*/

namespace SGBotic {

   /**
     * Reads the temperature from the one-wire temperature sensor.
     */

     export enum pin {
       //% block=pin0
       pin0 = 0,
       //% block=pin1
       pin1 = 1,
       //% block=pin2
       pin2 = 2,
       //% block=pin5
       pin5 = 5,
       //% block=pin8
       pin8 = 8,
       //% block=pin11
       pin11 = 11,
       //% block=pin12
       pin12 = 12,
       //% block=pin13
       pin13 = 13,
       //% block=pin14
       pin14 = 14,
       //% block=pin15
       pin15 = 15,
       //% block=pin16
       pin16 = 16
     }
     
    //% shim=DS18B20::Temperature
    export function Temperature(p: number): number {
        // Fake function for simulator
        return 0
    }
    
    //% weight=10 blockId="DS18B20_output" 
    //% block="temperature(˚C)|%p"
    export function DS18B20_output(p: pin): number {
        return Math.round(Temperature(p)/10)
    }
    
}