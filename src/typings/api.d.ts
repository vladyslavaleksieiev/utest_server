interface IError {
  message?: string;
  status?: number;
}

interface IResponse extends IError {
  ok: boolean;
}
