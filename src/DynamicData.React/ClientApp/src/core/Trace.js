export class Trace {

    static ConsoleSupport() {

        const undefinedstr = void 0;

        return typeof console !== undefinedstr
            && typeof console.log !== undefinedstr
            && typeof console.warn !== undefinedstr
            && typeof console.error !== undefinedstr;
    }

    static Message(message) {

        if (!Trace.ConsoleSupport()) {
            return;
        }

        console.log(message);
    }

    static Warning(message, ...data) {

        if (!Trace.ConsoleSupport()) {
            return;
        }

        console.warn(message, data);
    }
}