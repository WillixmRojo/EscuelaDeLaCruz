import { body, param, validationResult } from "express-validator";

export const validationResultExpress = (req, res, next) => {
  console.log(req.body);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};

export const bodyRegisterValidator = [
  body("usuario", "El campo no debe estar vacío").trim().notEmpty().escape(),
  body("usuario", "El nombre de usuario no debe contener números")
    .trim()
    .not()
    .matches(/\d/),
  body("usuario", "El nombre de usuario no debe contener carecteres especiales")
    .trim()
    .not()
    .matches(
      /([^\w\u00e1\u00e9\u00ed\u00f3\u00fa\u00c1\u00c9\u00cd\u00d3\u00da\u00f1\u00d1 ]|\_)/
    ),
  body("usuario", "El nombre de usuario debe contener mínimo 6 caracteres"),
  body("email", "Formato de email incorrecto")
    .not()
    .isEmpty()
    .trim()
    .isEmail()
    .normalizeEmail(),
  body("password", "Mínimo 6 caracteres").trim().isLength({ min: 6 }),
  body("password", "Formato de password incorrecta").custom(
    (value, { req }) => {
      if (value !== req.body.repassword) {
        throw new Error("No coinciden las contraseñas");
      }
      return value;
    }
  ),
  validationResultExpress,
];

export const bodyLoginValidator = [
  body("email", "Formato de email incorrecto")
    .trim()
    .isEmail()
    .normalizeEmail(),
  validationResultExpress,
];

export const bodyUserValidator = [
  body("usuario", "El campo no debe estar vacío").trim().notEmpty().escape(),
  body("email", "Formato de email incorrecto")
    .trim()
    .notEmpty()
    .isEmail()
    .normalizeEmail(),
  validationResultExpress,
];

export const paramsValidator = [
  param("id", "Formato no válido (ExpressValidator)")
    .trim()
    .notEmpty()
    .escape(),
  validationResultExpress,
];
