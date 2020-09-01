export interface IClientParams {
  name?: string;
  surname?: string;
  patronymic?: string;
  ageFrom?: number;
  ageTo?: number;
  email?: string;
  phone?: string;
  status_id?: number;
  city_id?: number;
  group_id?: number;
  pageIndex?: number;
  pageSize?: number;
  order?: string;
  sort?: string;
}
