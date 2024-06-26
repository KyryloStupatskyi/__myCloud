const sequelize = require("../db")
const { DataTypes } = require("sequelize")

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  diskSpace: { type: DataTypes.BIGINT, defaultValue: 1024 ** 3 * 10 },
  usedSpace: { type: DataTypes.BIGINT, defaultValue: 0 },
  avatarImg: { type: DataTypes.STRING },
})

const File = sequelize.define("file", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  type: { type: DataTypes.STRING, allowNull: false },
  size: { type: DataTypes.INTEGER, defaultValue: 0 },
  path: { type: DataTypes.STRING, defaultValue: '' },
})

const ChildFiles = sequelize.define('childFile', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

User.hasMany(File)
File.belongsTo(User)

File.hasMany(ChildFiles, { as: "parentId", foreignKey: "parentId" })
ChildFiles.belongsTo(File)

File.hasMany(File, { as: "parentFileId", foreignKey: "parentId" })

module.exports = { User, File }