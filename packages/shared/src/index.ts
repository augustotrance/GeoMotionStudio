export type Brand<Value, Name extends string> = Value & {
  readonly __brand: Name;
};

export type Frozen<Value> = {
  readonly [Key in keyof Value]: Frozen<Value[Key]>;
};

export type Result<Value, Failure> =
  | { readonly ok: true; readonly value: Value }
  | { readonly ok: false; readonly error: Failure };
