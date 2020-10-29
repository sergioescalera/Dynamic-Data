module DynamicData.Core {

    "use strict";

    export class Trace {

        static ConsoleSupport(): boolean {

            return typeof console !== undefinedstr &&
                typeof console.log !== undefinedstr &&
                typeof console.warn !== undefinedstr &&
                typeof console.error !== undefinedstr;
        }

        static Message(message: string): void {

            if (!Trace.ConsoleSupport()) {
                return;
            }

            console.log(message);
        }

        static Warning(message: string, ...data: any[]): void {

            if (!Trace.ConsoleSupport()) {
                return;
            }

            console.warn(message, data);
        }
    }
}