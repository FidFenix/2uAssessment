'use strict';

module.exports = function(sequelize, DataTypes) {
  const Invoice = sequelize.define('invoice', {
    invoice_number: DataTypes.STRING,
    total: DataTypes.FLOAT,
    currency: DataTypes.STRING,
    vendor_name: DataTypes.STRING,
    remittance_address: DataTypes.STRING,
    status: DataTypes.STRING,
    invoice_date: DataTypes.DATE,
    due_date: DataTypes.DATE
  }, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    classMethods: {
      associate() {
        // associations can be defined here
      }
    }
  });
  return Invoice;
};
