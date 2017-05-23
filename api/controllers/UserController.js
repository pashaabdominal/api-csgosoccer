/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {ss
		getList: (req, res) => {
			res.ok([
				{
					id: 1,
					username: 'Pasha Abdominal'
				},
				{
					id: 2,
					username: 'Lucas'
				},
				{
					id: 3,
					username: 'Antonio'
				}
			]);
		}
};
