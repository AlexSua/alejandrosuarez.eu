export function onlyClientSide() {
    return function (
        target: Object,
        key: string | symbol,
        descriptor: PropertyDescriptor
    ) {
        process.client && (descriptor = null)
        return descriptor;
    };
}
