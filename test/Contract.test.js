const { assert } = require('chai');
const Contract = artifacts.require('./Contract');
require('chai').use(require('chai-as-promised')).should();

contract('Contract', (accounts) => {
  let contract;
  before(async () => {
    contract = await Contract.deployed();
  });

  // Test Deployment
  contract('Deployment', async () => {
    it('deploys successfully', async () => {
      const address = await contract.address;
      assert.notEqual(address, 0x0);
      assert.notEqual(address, '');
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
    });
  });
});
