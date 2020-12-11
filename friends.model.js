// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const friends = sequelizeClient.define('friends', {
    FRIENDS_ID: {
      type: DataTypes.STRING(4),
      allowNull: false,
      unique:true,
    },
    Number_Friends: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Friends_username: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    FRIENDS_Post: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    USERS_ID: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  friends.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    courses.belongsToMany(models.XXX,{through: 'courses.XXX'})
  };

  return friends;
};
