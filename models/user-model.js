

export default (sequelize, Sequelize) => {
  // create a model for the tutorial table
  const Tutorial = sequelize.define("tutorial", {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    counting: {
      type: Sequelize.INTEGER,
    },
    price: {
      type: Sequelize.INTEGER,
    },
    published: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Tutorial;
};

