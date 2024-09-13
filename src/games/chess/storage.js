const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "playerEmails.json");

const loadEmails = () => {
  if (!fs.existsSync(filePath)) {
    return {};
  }
  const data = fs.readFileSync(filePath, "utf-8");
  console.log("Data:", data);
  return JSON.parse(data);
};

const saveEmails = (emails) => {
  fs.writeFileSync(filePath, JSON.stringify(emails, null, 2), "utf-8");
};

module.exports = {
  loadEmails,
  saveEmails,
};
