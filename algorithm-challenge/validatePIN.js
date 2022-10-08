function validatePIN(pin) {
    if (!/\D/.test(pin) && pin.length === 4) {
    return true;
  }

  if (!/\D/.test(pin) && pin.length === 6) {
    return true;
  }

  return false;
}


//Examples
validatePIN('1234') //true
validatePIN('12345') //false
validatePIN('a234') //false
