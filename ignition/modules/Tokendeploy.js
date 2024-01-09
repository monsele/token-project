const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Tokendeploy", (m) => {
    const tokenSele = m.contract("SeleToken", ["0x133bC7a7EA1E1A5B03D67c1Fe09039c9520D5104"]);
  
    //m.call(tokenSele, "launch", []);
  
    return { tokenSele };
  });