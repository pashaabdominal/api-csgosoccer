/**
 * JackpotController
 *
 * @description Server-side logic for managing jackpots
 * @help See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
		current: (req, res) => {
			Jackpot.getCurrent()
			.then((JackpotEntity) => {
				res.ok(JackpotEntity);
			});
		}
};
