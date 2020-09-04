export interface IPaymentParams {
  number?: number;
  dateFrom?: Date;
  dateTo?: Date;
  amountFrom?: number;
  amountTo?: number;
  application_id?: number;
  status_id?: number;
  type_id?: number;
  pageIndex?: number;
  pageSize?: number;
  order?: string;
  sort?: string;
}
