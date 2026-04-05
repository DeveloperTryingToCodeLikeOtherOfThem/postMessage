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
