interface IError {
  message?: string;
  status?: number;
}

interface IResponce extends IError {
  ok: boolean;
}
