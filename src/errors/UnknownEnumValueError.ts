/**
 * Error throw when decoding enums and a value is not found or not known yet.
 * When this error is thrown, please [open an issue on GitHub](https://github.com/LiterateInk/Crowous.js/issues).
 */
export class UnknownEnumValueError extends Error {
  /**
   * @param enumName From which enum the error originates.
   * @param value What we got to know what is missing.
   */
  constructor(enumName: string, value: string) {
    super(`Expected a value from the enum '${enumName}', but got '${value}'`);
    this.name = "UnknownEnumValueError";
  }
}
