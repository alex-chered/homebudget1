// ==============================|| ACTION REJECTED ERROR ||============================== //

export class ActionRejectedError extends Error {
  //
  // CONSTRUCTOR
  //
  constructor(message: string) {
    super(message);
    this.name = 'ActionRejectedError';
  }

  //
  // IS ERROR
  //
  static isError(error: Error): error is ActionRejectedError {
    return error.name === 'ActionRejectedError';
  }
}
