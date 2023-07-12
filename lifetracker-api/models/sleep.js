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
                    start_time,
                    end_time,
                    email
                    ) 
        VALUES ($1, $2, $3, (SELECT id FROM users WHERE email = $4))
        RETURNING id,
                  start_time,
                  end_time,
                  email"
                          `,
      [sleep.start_time, sleep.end_time]
    );
    const newSleep = result.rows[0];
    return newSleep;
  }

  static async listSleep(email) {
    try {
      const result = await database.query(
        `
      SELECT * FROM sleep WHERE email = $1`,
        [email]
      );

      const sleep = result.rows;
      console.log("Sleep model", sleep)
      if (!sleep || sleep.length === 0) {
        throw new NotFoundError("No sleep logged from this user");
      }
      return sleep;
    } catch (err) {
      return err;
    }
  }

  static async insertSleep(start_time, end_time, email){
    const sleep = await database.query(
        `INSERT INTO sleep (
            start_time,
            end_time,
            email
        )
        VALUES ($1, $2, $3)
        RETURNING
        start_time,
        end_time
        `, 
        [start_time, end_time, email]
    );
    return sleep.rows[0]
}
}

module.exports = Sleep;