export interface ITaskParams {
  title?: string;
  dateFrom?: Date;
  dateTo?: Date;
  important?: number;
  description?: string;
  user_id?: number;
  status_id?: number;
  client_id?: number;
  pageIndex?: number;
  pageSize?: number;
  order?: string;
  sort?: string;
}
