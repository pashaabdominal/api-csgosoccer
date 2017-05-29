const request = require('request');

/**
 * @name RequestService
 * @description The service to perform get requests
 * @requires request
 * @author Lucas Silva <joao.galiano.silva@gmail.com>
 */
module.exports = {
  /**
   * @description Exec a simple get request by url
   * @param string url
   * @returns {Promise.<mixed, Error>}
   */
  exec: (url) =>
  {
    return new Promise((resolve, reject) => {
      request(url, (error, response) => {

        if(error) {
          return reject(error);
        }

        return resolve(response);
      });
    });
  }
}
