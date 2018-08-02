/*       */

function mapToObject   (map                )   
                    
  {
    const result                = {};

    Array
        .from(map.entries())
        .map(([key        , value   ]) => {
            result[key] = value;
        });

    return result;
}

function assertNotNull   (value    )    {
    if (value == null) { throw new Error(`Assert failure: Expected non-null but got ${typeof value === 'undefined' ? 'undefined' : 'null'}`); }
    return value;
}

function assertBoolean(value       )          {
    if (typeof value !== 'boolean') { throw new Error(`Assert failure: Expected boolean but got ${typeof value}`); }
    return value;
}

function assertNumber(value       )         {
    if (typeof value !== 'number') { throw new Error(`Assert failure: Expected number but got ${typeof value}`); }
    return value;
}

function assertString(value       )         {
    if (typeof value !== 'string') { throw new Error(`Assert failure: Expected string but got ${typeof value}`); }
    return value;
}

function assertStringNullable(value       )          {
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
