var Contract = artifacts.require('Contract');

module.exports = function (deployer, network, accounts) {
  deployer.deploy(Contract);
};
