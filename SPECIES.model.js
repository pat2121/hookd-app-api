// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const species = sequelizeClient.define('species', {
    SPECIES_ID: {
      type: DataTypes.STRING(4),
      allowNull: false,
    },
    Species_Name: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    Common_Name: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    Color: {
      type: DataTypes.STRING(10),
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
  species.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return species;
};
