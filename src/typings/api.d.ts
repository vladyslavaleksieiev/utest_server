interface IError {
  message?: string;
}

interface IResponce extends IError {
  ok: boolean;
}
