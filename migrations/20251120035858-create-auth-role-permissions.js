'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("auth_role_permissions", {
      role_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "auth_roles",
          key: "id"
        },
      },
      permission_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "auth_permissions",
          key: "id"
        },
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
    await queryInterface.dropTable("auth_role_permissions");
  }
};