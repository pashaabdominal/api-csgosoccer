/**
 * JackpotController
 *
 * @description Server-side logic for managing jackpots
 * @help See http://sailsjs.org/#!/documentation/concepts/Controllers
 * @author Afonso Martins <afonsopoker@gmail.com>
 */
module.exports = {
    /**
		 * @name current
		 * @description This method returns the information about current jackpot
		 */
		current: (req, res) => {
			Jackpot.findOneByCurrent(true)
			.then((JackpotEntity) => {

				if (!JackpotEntity) {
          return res.notFound();
				}

				res.ok(JackpotEntity);
			});
		}
};
