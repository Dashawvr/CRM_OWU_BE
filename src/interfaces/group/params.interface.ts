export interface IGroupParams {
  name?: string;
  practiceFrom?: number;
  practiceTo?: number;
  startDateFrom?: Date;
  startDateTo?: Date;
  endDateFrom?: Date;
  endDateTo?: Date;
  startTimeFrom?: Date;
  startTimeTo?: Date;
  course_id?: number;
  city_id?: number;
  pageIndex?: number;
  pageSize?: number;
  order?: string;
  sort?: string;
}
