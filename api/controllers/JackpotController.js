/**
 * JackpotController
 *
 * @description :: Server-side logic for managing jackpots
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
		get: (req, res) => {
			Jackpot.find({
				current: true
			})
			.then((JackpotEntity) => {

				res.ok(JackpotEntity)
			});
		}
};
