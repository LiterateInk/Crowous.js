export class UnknownEnumValueError extends Error {
  constructor(label: string, value: string) {
    super(`Expected a value from the enum '${label}', but got '${value}'`);
    this.name = "UnknownEnumValueError";
  }
}
