export type ResponseType<T> = {
  code: number;
  message: string;
  data: T;
};

export type ResponseDataRowsType<T> = {
  count: number;
  rows: T[];
};
