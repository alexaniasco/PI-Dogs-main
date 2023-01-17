const { DataTypes } = require("sequelize");

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "raza",
    {
      Id: {
        type: DataTypes.UUID,
        primaryKey: true,
        
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      altura: {
        type: DataTypes.STRING,
      },
      height: {
        type: DataTypes.INTEGER,
      },
      heightMax: {
        type: DataTypes.INTEGER,
      },
      life_span: {
        type: DataTypes.INTEGER,
      },
      url: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};
