// server.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const { Sequelize, DataTypes } = require('sequelize');
const app = express()

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

// Models
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('SuperAdmin', 'Admin', 'Donor', 'Recipient'),
    allowNull: false,
  },
});

const Hospital = sequelize.define('Hospital', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contact_info: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const BloodStock = sequelize.define('BloodStock', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  blood_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

const BloodPurchase = sequelize.define('BloodPurchase', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  blood_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  purchase_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

const DonorCampaign = sequelize.define('DonorCampaign', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  campaign_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  end_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const TransferArrangement = sequelize.define('TransferArrangement', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  transfer_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

const SuperAdmin = sequelize.define('SuperAdmin', {});
const Admin = sequelize.define('Admin', {});
const Donor = sequelize.define('Donor', {
  blood_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_donation_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});
const Recipient = sequelize.define('Recipient', {
  blood_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  required_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

// Relationships
User.hasOne(SuperAdmin, { foreignKey: 'userId' });
User.hasOne(Admin, { foreignKey: 'userId' });
User.hasOne(Donor, { foreignKey: 'userId' });
User.hasOne(Recipient, { foreignKey: 'userId' });

SuperAdmin.belongsTo(User);
Admin.belongsTo(User);
Donor.belongsTo(User);
Recipient.belongsTo(User);

Admin.belongsTo(Hospital);
Hospital.hasMany(Admin);

Hospital.hasMany(BloodStock);
BloodStock.belongsTo(Hospital);

Recipient.hasMany(BloodPurchase);
BloodPurchase.belongsTo(Recipient);

BloodPurchase.belongsTo(Hospital);
Hospital.hasMany(BloodPurchase);

Donor.hasMany(TransferArrangement);
TransferArrangement.belongsTo(Donor);

TransferArrangement.belongsTo(DonorCampaign);
DonorCampaign.hasMany(TransferArrangement);

Hospital.hasMany(DonorCampaign);
DonorCampaign.belongsTo(Hospital);

const app = express();
app.use(bodyParser.json());

// Routes
app.get('/api/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

app.post('/api/hospitals', async (req, res) => {
  const hospital = await Hospital.create(req.body);
  res.json(hospital);
});

app.get('/api/hospitals', async (req, res) => {
  const hospitals = await Hospital.findAll();
  res.json(hospitals);
});

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});