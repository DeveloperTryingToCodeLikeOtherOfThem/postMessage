namespace control {
    export interface SimulatorMessage {
        type: string;
        source?: string;
    }

    export interface SimulatorCommandMessage extends SimulatorMessage {
        type: "simulator",
        command: "modal" | "restart" | "reload" | "setstate" | "focus" | "blur" | "single"
    }

    //% shim=Runtime::postMessage
    export function postMessage(data: SimulatorMessage) {

    }
}

/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function foo(n: number, s: string, e: MyEnum): void {
        // Add code here
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
}
