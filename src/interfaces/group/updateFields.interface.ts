export interface IGroupUpdateFields {
  name: string;
  practice: number;
  startDate: Date;
  endDate: Date;
  startTime: Date;
  clients?: Array<number>;
  course_id?: number;
  city_id?: number;
}
