//https://stackoverflow.com/questions/27936772/how-to-deep-merge-instead-of-shallow-merge
function deepMerge(target, source) {
    if (typeof target !== 'object' || typeof source !== 'object') return false; // target or source or both ain't objects, merging doesn't make sense
    for (var prop in source) {
        if (!source.hasOwnProperty(prop)) continue; // take into consideration only object's own properties.
        if (prop in target) { // handling merging of two properties with equal names
            if (typeof target[prop] !== 'object') {
                target[prop] = source[prop];
            } else {
                if (typeof source[prop] !== 'object') {
                    target[prop] = source[prop];
                } else {
                    if (target[prop].concat && source[prop].concat) { // two arrays get concatenated
                        target[prop] = target[prop].concat(source[prop]);
                    } else { // two objects get merged recursively
                        target[prop] = deepMerge(target[prop], source[prop]);
                    }
                }
            }
        } else { // new properties get added to target
            target[prop] = source[prop];
        }
    }
    return target;
}