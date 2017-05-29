/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    /**
    DISABLE CREATED_AT AND UPDATED_AT
    **/

    autoCreatedAt: false
    autoUpdatedAt: false,

    /**
    ///////////////////////////////////////////////////
    **/
    attributes{
      /**
       * @name avatar
       * @type string
       * @description Steam avatar of user
       */
      avatar: {
        type: 'string',
        size: '32'
      },
      /**
       * @name steamID
       * @type string
       * @description Steam id of user
       */
      steamId: {
        type: 'string',
        unique: true,
        size: '32'
      },
      /**
       * @name tradeUrl
       * @type string
       * @description Steam tradeUrl of user
       */
      tradeUrl: {
        type: 'string',
        size: '32'
      },
      /**
       * @name username
       * @type string
       * @description Steam username of user
       */
      username: {
        type: 'string',
        size: '32'
      },

    }

  }
};
