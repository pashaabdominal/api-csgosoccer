/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getList: (req, res) => {
		res.ok({
			cenas: 1
		})
	}
};
