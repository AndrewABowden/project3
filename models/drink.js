module.exports = function (sequelize, DataTypes) {
  var Drinks = sequelize.define("drinks",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      glass_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      thumb_img_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      instructions: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      }
    },
    {
      timestamps: false
    });

  Drinks.associate = function (models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Drinks.hasMany(models.drink_contents, {
      foreignKey: "drink_id",
    });
  };
  return Drinks;
};