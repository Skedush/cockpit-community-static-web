/* eslint-disable */
// @ts-nocheck

const {
  getOwnPropertyDescriptor,
  getOwnPropertyNames,
  getOwnPropertySymbols,
} = Object;

export type MethodDecorator = (
  target: Object,
  key: string,
  descriptor: PropertyDescriptor,
  ...args: any[]
) => PropertyDescriptor;

export function isDescriptor(desc: Object) {
  if (!desc || !desc.hasOwnProperty) {
    return false;
  }

  const keys = ['value', 'initializer', 'get', 'set'];

  for (let i = 0, l = keys.length; i < l; i++) {
    if (desc.hasOwnProperty(keys[i])) {
      return true;
    }
  }

  return false;
}

export function decorate(handleDescriptor: MethodDecorator, entryArgs: any[]) {
  if (isDescriptor(entryArgs[entryArgs.length - 1])) {
    return handleDescriptor(...entryArgs, []);
  } else {
    return function () {
      return handleDescriptor(
        ...Array.prototype.slice.call(arguments),
        entryArgs,
      );
    };
  }
}

export const getOwnKeys = getOwnPropertySymbols
  ? function (object: object) {
      return getOwnPropertyNames(object).concat(getOwnPropertySymbols(object));
    }
  : getOwnPropertyNames;

export function getOwnPropertyDescriptors(obj: any) {
  const descs = {};

  getOwnKeys(obj).forEach(
    (key: string) => (descs[key] = getOwnPropertyDescriptor(obj, key)),
  );

  return descs;
}

export function createDefaultSetter(key: string) {
  return function set(this: any, newValue: any) {
    Object.defineProperty(this, key, {
      configurable: true,
      writable: true,
      // IS enumerable when reassigned by the outside word
      enumerable: true,
      value: newValue,
    });

    return newValue;
  };
}

export function bind(fn, context) {
  if (fn.bind) {
    return fn.bind(context);
  } else {
    return function __autobind__() {
      return fn.apply(context, arguments);
    };
  }
}

export const warn = (() => {
  if (
    typeof console !== 'object' ||
    !console ||
    typeof console.warn !== 'function'
  ) {
    return () => {};
  } else {
    return bind(console.warn, console);
  }
})();

const seenDeprecations = {};
export function internalDeprecation(msg) {
  if (seenDeprecations[msg] !== true) {
    seenDeprecations[msg] = true;
    warn('DEPRECATION: ' + msg);
  }
}
