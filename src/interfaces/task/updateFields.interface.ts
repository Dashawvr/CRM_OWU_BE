export interface ITaskUpdateFields {
  title?: string;
  dateFrom?: Date;
  dateTo?: Date;
  important?: boolean;
  description?: string;
  user_id?: number;
  status_id?: number;
  client_id?: number;
}
