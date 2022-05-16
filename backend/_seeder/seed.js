const env = require("dotenv");
env.config({ path: "../config/.env" });

const db = require("../config/db");

// DATA FILES
const users = require("./data/users");
const products = require("./data/products");

// MODELS
const userModel = require("../model/user-model");
const productModel = require("../model/product-model");

const insertdata = async () => {
  try {
    db();
    // await userModel.deleteMany();
    await productModel.deleteMany();
    const result = await userModel.create(users);
    const admin = result[0]._id;
    const sampleData = products.map((item) => {
      return { ...item, userId: admin };
    });
    const data = await productModel.create(sampleData);
    console.log("DATA INSERTED SUCCESS!!!");
    console.log(data);
    process.exit();
  } catch (error) {
    console.log(`ERRO : ${error}`);
    process.exit();
  }
};
const deletedata = async () => {
  try {
    db();
    // await userModel.deleteMany();
    await productModel.deleteMany();
    console.log("Data Destroyed");
    process.exit();
  } catch (error) {
    console.log(`ERRO : ${error}`);
    process.exit();
  }
};

if (process.argv[2] === "-c") {
  insertdata();
} else if (process.argv[2] === "-d") {
  deletedata();
} else {
  console.log("INVALID OPRATION");
}
