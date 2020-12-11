// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const posts = sequelizeClient.define('posts', {
    Picture: {
      type: DataTypes.STRING.BINARY(2000),
      allowNull: true,
    },
  POSTS_ID: {
    type: DataTypes.STRING(4),
    allowNull: false,
  },
  Description: {
    type: DataTypes.STRING(30),
    allowNull: true,
  },
  Is_Private: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  USERS_ID: {
    type: DataTypes.STRING(5),
    allowNull: true,
  },
  Species_ID: {
    type: DataTypes.STRING(4),
    allowNull: true,
  },
  Location_ID: {
    type: DataTypes.STRING(4),
    allowNull: true,
  },
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  posts.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return posts;
};
