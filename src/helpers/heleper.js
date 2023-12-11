import { toast } from "react-toastify";

export const preventDefault = (e) => {
  e.preventDefault();
};

// toster  ---
export const createToast = (msg, type = "error") => {
  return toast[type](msg);
};

// phone number validation
export const isPhone = (mobile) => {
  const phoneRegex = /^(\+?880|0)1[1-9]\d{8}$/;
  return phoneRegex.test(mobile);
};

// email validation
export const isEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};
