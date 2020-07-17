export const checkAlphaNumeric = (str) => {
  const pattern = /^[a-zA-Z0-9]+$/;
  return str.match(pattern);
}

export const checkValidEmail = (str) => {
  const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/;
  return str.toUpperCase().match(pattern);
}

export const checkValidPassword = (str) => {
  const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return str.match(pattern);
}

export const isFormValid = (errors) => {
  for (const key in errors) {
    if (errors[key] !== '') {
      return false;
    }
  }
  return true;
}

export const setCookie = (cname, cvalue, exdays) => {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export const isLoggedIn = () => {
  return localStorage.getItem('isLoggedIn') === "true";
}
