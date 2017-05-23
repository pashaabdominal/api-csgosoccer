/**
 * JackpotController
 *
 * @description Server-side logic for managing jackpots
 * @help See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
    * @name current
    * @description This method returns the information about current jackpot
    */
		current: (req, res) => {
<<<<<<< HEAD
      Jackpot.findOneByCurrent(true)
=======
			Jackpot.findOneByCurrent(true)
>>>>>>> 1576903936e68ac6f5d41105337be70cacf06ef0
			.then((JackpotEntity) => {
        if (JackpotEntity == null)
          return res.notFound();
				res.ok(JackpotEntity);
			});
		}
};
