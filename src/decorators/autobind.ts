namespace App {
    // Autobind
    export function autobind(
        // para ignorar target y methodName agregar underscores para anularlos:
        _: any,
        _2: string,
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value;
        const adjDescriptor: PropertyDescriptor = {
            configurable: true,
            get() {
                const boundFn = originalMethod.bind(this);
                return boundFn;
            }
        };
        return adjDescriptor;
    };

}