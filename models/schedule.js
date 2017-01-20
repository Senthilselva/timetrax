'use strict';
module.exports = function(sequelize, DataTypes) {
  var Schedule = sequelize.define('Schedule', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true    
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  },
  {
    paranoid: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Schedule.belongsTo(models.Job, {
          onDelete: "CASCADE",
          hooks: true,
          foreignKey: {
            allowNull: false
          }
        })
        Schedule.belongsTo(models.User,{
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: true
          }
        })
      }//associate
    }
  });
  return Schedule;
};