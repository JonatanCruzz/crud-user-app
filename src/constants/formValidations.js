const EMAIL_VALIDATIONS = {
  required: {
    value: true,
    message: "Este campo es requerido",
  },
  pattern: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Ingrese un correo válido",
  },
};

const PASSWORD_VALIDATIONS = {
  required: {
    value: true,
    message: "Este campo es requerido",
  },
  maxLength: {
    value: 50,
    message: "Este campo acepta 50 carácteres como máximo",
  },
  minLength: {
    value: 5,
    message: "Este campo acepta 5 carácteres como minimo",
  },
};

const FIRST_NAME_VALIDATIONS = {
  required: {
    value: true,
    message: "Este campo es requerido",
  },
  maxLength: {
    value: 50,
    message: "Este campo acepta 50 carácteres como máximo",
  },
  minLength: {
    value: 5,
    message: "Este campo acepta 5 carácteres como minimo",
  },
};

const LAST_NAME_VALIDATIONS = {
  required: {
    value: true,
    message: "Este campo es requerido",
  },
  maxLength: {
    value: 50,
    message: "Este campo acepta 50 carácteres como máximo",
  },
  minLength: {
    value: 5,
    message: "Este campo acepta 5 carácteres como minimo",
  },
};

export { FIRST_NAME_VALIDATIONS, LAST_NAME_VALIDATIONS, EMAIL_VALIDATIONS, PASSWORD_VALIDATIONS };
