import {
  Application,
  ApplicationFile,
  City,
  Client,
  ClientFile,
  ClientStatus,
  Comment,
  Course,
  Discount,
  Group,
  OAuthToken,
  Payment,
  PaymentFile,
  PaymentStatus,
  PaymentType,
  Source,
  Task,
  TaskStatus,
  User
} from '../models';

export const initDBAssociations = (): void => {
  //Application
  Application.hasMany(ApplicationFile, {foreignKey: 'application_id', onDelete: 'cascade'});
  Application.hasMany(Payment, {foreignKey: 'application_id', onDelete: 'cascade'});
  Application.belongsToMany(Source, {through: 'application_source', foreignKey: 'application_id'});
  Application.belongsToMany(Discount, {through: 'application_discount', foreignKey: 'application_id'});

  //City
  City.hasMany(Application, {foreignKey: 'city_id'});
  City.hasMany(Group, {foreignKey: 'city_id'});
  City.belongsToMany(User, {through: 'user_city', foreignKey: 'city_id'});

  //Client
  Client.hasMany(Comment, {foreignKey: 'client_id'});
  Client.hasMany(ClientFile, {foreignKey: 'client_id', onDelete: 'cascade'});
  Client.hasMany(Application, {foreignKey: 'client_id', onDelete: 'cascade'});
  Client.belongsToMany(Group, {through: 'client_group', foreignKey: 'client_id'});

  //ClientStatus
  ClientStatus.hasMany(Client, {foreignKey: 'status_id'});

  //Course
  Course.hasMany(Application, {foreignKey: 'course_id'});
  Course.hasMany(Group, {foreignKey: 'course_id'});

  //Discount
  Discount.belongsToMany(Application, {through: 'application_discount', foreignKey: 'discount_id'});

  //Group
  Group.belongsToMany(Client, {through: 'client_group', foreignKey: 'group_id'});

  //Payment
  Payment.hasMany(PaymentFile, {foreignKey: 'payment_id', onDelete: 'cascade'});

  //PaymentStatus
  PaymentStatus.hasMany(Payment, {foreignKey: 'status_id'});

  //PaymentType
  PaymentType.hasMany(Payment, {foreignKey: 'type_id'});

  //Source
  Source.belongsToMany(Application, {through: 'application_source', foreignKey: 'source_id'});

  //Task
  TaskStatus.hasMany(Task, {foreignKey: 'status_id'});

  //User
  User.hasMany(OAuthToken, {foreignKey: 'user_id', onDelete: 'cascade'});
  User.hasMany(Task, {foreignKey: 'user_id'});
  User.hasMany(Comment, {foreignKey: 'user_id', onDelete: 'cascade'});
  User.belongsToMany(City, {through: 'user_city', foreignKey: 'user_id'});
};
