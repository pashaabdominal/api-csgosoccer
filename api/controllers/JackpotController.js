/**
 * JackpotController
 *
 * @description :: Server-side logic for managing jackpots
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
		current: (req, res) => {
			Jackpot.findOne({
				current: true
			})
			.then((JackpotEntity) => {
				res.ok(JackpotEntity)
			});
		}
};
