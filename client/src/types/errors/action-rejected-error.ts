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
  static isError(error: unknown): error is ActionRejectedError {
    const err = error as Error;
    return err.name !== undefined && err.name === 'ActionRejectedError';
  }
}
