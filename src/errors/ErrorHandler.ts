export class ErrorHandler extends Error {
  public name = 'Controller Error';
  public status: number;
  public message: string;
  public code?: number;
  public data?: any;

  constructor(status: number, msg: string, code?: number, data?: any) {
    super(msg);
    this.message = msg;
    this.status = status;
    this.code = code;
    this.data = data;
    Error.captureStackTrace(this, this.constructor);
  }
}
