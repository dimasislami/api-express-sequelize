'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("auth_tokens", {
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "auth_users",
          key: "id"
        },
      },
      token: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      expired_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });

    await queryInterface.addConstraint("auth_tokens", {
      fields: ["user_id", "token"],
      type: "primary key",
      name: "auth_tokens_pkey"
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("auth_tokens");
  }
};