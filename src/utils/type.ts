export interface Dictionary<T> {
  [index: string]: T;
}

/**
 * 获取已定义类型中某个属性的类型定义
 * eg: type MyPropType = PropType<ObjType, 'key'>;
 */
export type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type Lit = string | number | boolean | undefined | null | void | {};
export const tuple = <T extends Lit[]>(...args: T) => args;
