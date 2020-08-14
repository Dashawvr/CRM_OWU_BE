import {DataTypes, Model} from 'sequelize';
import {sequelize} from '../../../configs';
import {DatabaseModelEnum, UserRoleEnum} from '../../../constants';
import {HASH_PASSWORD} from '../../../helpers';

export class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  login:{
    type: new DataTypes.STRING(20),
    unique:true,
    allowNull: false,
    validate:{
      notEmpty: true,
      len: [8,20],
      isAlphanumeric: true
    }
  },
  password:{
    type: new DataTypes.STRING(20),
    allowNull: false,
    validate:{
      notEmpty: true,
      len: [8,20]
    },
    set(password: string) {
      HASH_PASSWORD(password).then(hash => this.setDataValue('password', hash ));
    }
  },
  name:{
    type: new DataTypes.STRING(300),
    allowNull: false,
    validate:{
      notEmpty: true,
      len: [3,20]
    }
  },
  surname:{
    type: new DataTypes.STRING(300),
    allowNull: false,
    validate:{
      notEmpty: true,
      len: [3,20]
    }
  },
  role:{
    type: DataTypes.ENUM({
      values:[
        UserRoleEnum.ROLE_USER,
        UserRoleEnum.ROLE_ADMIN
      ]
    })
  }
},
{
  sequelize,
  modelName: DatabaseModelEnum.USER_MODEL_NAME
});
