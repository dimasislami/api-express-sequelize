'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("auth_user_roles", {
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "auth_users",
          key: "id"
        },
      },
      role_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "auth_roles",
          key: "id"
        },
      },
      is_used: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      created_by: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "auth_users",
          key: "id"
        },
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("auth_user_roles");
  }
};