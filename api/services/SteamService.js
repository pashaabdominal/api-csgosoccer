/**
 * @name SteamService
 * @description The service to fetch steam informations
 * @author Lucas Silva <joao.galiano.silva@gmail.com>
 */
module.exports = {
  /**
   * @description Fetch user inventories by steamID64
   * @param int steamID
   * @returns {Promise.<mixed, Error>}
   */
  getUserInventory: (steamID) =>
  {
    return new Promise((resolve, reject) => {

      const url = `http://steamcommunity.com/profiles/${steamID}/inventory/json/730/2/?trading=1`;

      RequestService.exec(url)
      .then(response => {

          if(!_.get(response, 'body')) {
            return reject('Could not find "body" index from response');
          }

          let data, cenas;

          try {
            data = JSON.parse(response.body);
            cenas = 1;
          } catch(err) {
            return reject('Cannot parse "response.body" to JSON');
          }

          if(!_.has(data, 'success')) {
            return reject('Could not find "success" index from "response.body"');
          }

          if(_.has(data, 'Error')) {
            if(data.Error === 'This profile is private.') {
              return resolve({
                status: 'PROFILE_IS_PRIVATE'
              });
            } else {
              return resolve({
                status: 'UNKNOWN_ERROR'
              });
            }
          }

          let items = [];

          _.map(data.rgInventory, function(item) {

            const itemIndex = item.classid + '_' + item.instanceid;

            if(data.rgDescriptions.hasOwnProperty(itemIndex)) {

              const currentItem = data.rgDescriptions[itemIndex];

              const leData = {
                asset_id: item.id,
                iconUrl: currentItem.icon_url,
                marketHashName: currentItem.market_hash_name
              };

              items.push(leData);
            }
          });

          return resolve({
            status: 'OK',
            items: items
          });
      })
      .catch(error => {
        reject(error);
      })
    });
  }
}
