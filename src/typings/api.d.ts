interface IError {
  message?: string;
  status?: number;
}

interface IResponse extends IError {
  ok: boolean;
}

interface IData<T> extends IResponse {
  data?: T;
}
