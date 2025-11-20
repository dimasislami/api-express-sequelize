'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("auth_role_menus", {
      role_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "auth_roles",
          key: "id"
        },
      },
      menu_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "auth_menus",
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
    await queryInterface.dropTable("auth_role_menus");
  }
};