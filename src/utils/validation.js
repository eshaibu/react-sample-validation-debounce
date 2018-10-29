import Validator from 'validatorjs';

const rules = {
  fullName: 'required|min:3|max:30',
  email: 'required|email',
  userNumber: 'required|numeric',
  dob:  'required|regex:/^\\d{4}-\\d{2}-\\d{2}$/',
};

export const singleFieldValidation = ({key, value}) => {
  const validationResponse = {isValid: true};
  if (rules[key]) {
    const validation = new Validator({[key]: value}, {[key]: rules[key]});
    validationResponse.isValid = validation.passes();
    if (!validationResponse.isValid) {
      validationResponse.errors = validation.errors.all();
    }
  }
  return validationResponse;
};

export const allFieldsValidation = (data) => {
  const validation = new Validator(data, rules);
  const validationResponse = {isValid: validation.passes()};
  if (!validationResponse.isValid) {
    validationResponse.errors = validation.errors.all();
  }
  return validationResponse;
};
