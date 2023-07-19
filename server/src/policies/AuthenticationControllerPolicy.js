const Joi = require('joi');

module.exports = {
  register(req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{8,32}$/),
    };

    const { error} = Joi.validate(req.body, schema);
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address.',
          });
          break;
        case 'password':
          res.status(400).send({
            error: `Password provided failed, please follow the rules:
            <br>
            1. Must contain only uppercase letters, lowercase letters, and numbers.
            <br>
            2. Must be at least 8 characters long.`,
          });
          break;
        default:
          res.status(400).send({
            error: 'Invalid registration info.',
          });
      }
    } else {
      next();
    }
  },
};
