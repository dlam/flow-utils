/* @flow */

function mapToObject<V>(map: Map<string, V>): {
    [key: string]: V
} {
    const result: {[string]: V} = {};

    Array
        .from(map.entries())
        .map(([key: string, value: V]) => {
            result[key] = value;
        });

    return result;
}

function assertNotNull<T>(value: ?T): T {
    if (value == null) { throw new Error(`Assert failure: Expected non-null but got ${typeof value === 'undefined' ? 'undefined' : 'null'}`); }
    return value;
}

function assertBoolean(value: mixed): boolean {
    if (typeof value !== 'boolean') { throw new Error(`Assert failure: Expected boolean but got ${typeof value}`); }
    return value;
}

function assertString(value: mixed): string {
    if (typeof value !== 'string') { throw new Error(`Assert failure: Expected string but got ${typeof value}`); }
    return value;
}

function assertStringNullable(value: mixed): ?string {
    if (!(value == null || typeof value === 'string')) { throw new Error(`Assert failure: Expected nullable string but got ${typeof value}`); }
    return value;
}

module.exports = {
    mapToObject,
    assertNotNull,
    assertBoolean,
    assertString,
    assertStringNullable
}
