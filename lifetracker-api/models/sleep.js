const database = require("../database");
const { BadRequestError, NotFoundError } = require("../utils/errors");
class Sleep {
  static async createSleep({sleep}) {
    const {
      start_time,
      end_time,
      created_at,
    } = sleep;

    const requiredSleep = ["start_time", "end_time"];

    try {
      validateFields({
        required: requiredSleep,
        obj: sleep,
        location: "sleep",
      });
    } catch (err) {
      throw err;
    }

    const result = await database.query(
      `INSERT INTO sleep (
                    id,
                    start_time,
                    end_time,
                    user_id
                    ) 
        VALUES ($1, $2, $3, (SELECT id FROM users WHERE email = $4))
        RETURNING id,
                  start_time,
                  end_time,
                  user_id,
                  created_at"
                          `,
      [sleep.start_time, sleep.end_time, sleep.quantity]
    );
    const newSleep = result.rows[0];
    return newSleep;
  }

  static async listSleep(user_id) {
    try {
      const result = await database.query(
        `
      SELECT * FROM sleep WHERE user_id = $1`,
        [user_id]
      );

      const sleep = result.rows;
      if (!sleep || sleep.length === 0) {
        throw new NotFoundError("No sleep logged from this user");
      }
      return sleep;
    } catch (err) {
      return err;
    }
  }
}

module.exports = Sleep;