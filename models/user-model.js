// export const userModel =  (sequelize, Sequelize) => {

//   const User = sequelize.define('user', {
    
//     username: {
//       type: Sequelize.STRING,
      
//     },
//     password: {
//       type: Sequelize.STRING
//     },
//     role: {
//       type: Sequelize.STRING
//     }
//   });

//   return User;

// }

export default (sequelize, Sequelize) => {
  // create a model for the tutorial table
  const Tutorial = sequelize.define("tutorial", {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    published: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Tutorial;
};