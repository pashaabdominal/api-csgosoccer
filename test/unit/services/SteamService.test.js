let sinon = require('sinon');
let should = require('should');

describe('SteamService', () => {
  describe('getUserInventory', () => {

      beforeEach(() => {
        MockedRequestService = sinon.stub(RequestService, 'exec');
      });

      afterEach(() => {
        MockedRequestService.restore();
      });

      it('Missing index "body" in "response"', (done) =>
      {
        MockedRequestService
        .returns(new Promise((resolve, reject) => {
          resolve({});
        }));

        SteamService
        .getUserInventory(1)
        .catch(error => {
          error.should.be.equal('Could not find "body" index from response');
          done();
        });
      });

      it('Error parsing "response.body" to JSON', (done) =>
      {
        MockedRequestService
        .returns(new Promise((resolve, reject) => {
          resolve({
            body: '{INVALID_JSON}This is a invalid json !"#$%&/()=?»"'
          });
        }));

        SteamService
        .getUserInventory(1)
        .catch(error => {
          error.should.be.equal('Cannot parse "response.body" to JSON');
          done();
        });
      });

      it('Missing index "success" from "response.body"', (done) =>
      {
        MockedRequestService
        .returns(new Promise((resolve, reject) => {
          resolve({
            body: '{}'
          });
        }));

        SteamService
        .getUserInventory(1)
        .catch(error => {
          error.should.be.equal('Could not find "success" index from "response.body"');
          done();
        });
      });

      it('With private inventory', (done) =>
      {
        MockedRequestService
        .returns(new Promise((resolve, reject) => {
          resolve({
            body: '{"success":false,"Error":"This profile is private."}'
          });
        }));

        SteamService
        .getUserInventory(1)
        .then(response => {
          response.should.be.deepEqual({
            status: 'PROFILE_IS_PRIVATE'
          });
          done();
        });
      });

      it('With unknown error from steam', (done) =>
      {
        MockedRequestService
        .returns(new Promise((resolve, reject) => {
          resolve({
            body: '{"success":false,"Error":"Unknow error"}'
          });
        }));

        SteamService
        .getUserInventory(1)
        .then(response => {
          response.should.be.deepEqual({
            status: 'UNKNOWN_ERROR'
          });
          done();
        });
      });
  });
});
