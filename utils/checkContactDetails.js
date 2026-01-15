const checkContactDetails = (
  firstName,
  lastName,
  email,
  favoriteColor,
  birthday,
  res
) => {
  if (!firstName) {
    return res.status(400).json("First name cannot be empty!");
  }

  if (!lastName) {
    return res.status(400).json("Last name cannot be empty!");
  }

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  if (!isValidEmail(email)) {
    return res.status(400).json("Email not valid!");
  }

  if (!favoriteColor) {
    return res.status(400).json("Favorite color cannot be empty!");
  }

  const isValidDate = (dateString) => {
    const date = new Date(dateString);
    return date instanceof Date && !isNaN(date);
  };

  if (!isValidDate(birthday)) {
    return res.status(400).json("Invalid date!");
  }
};

export default checkContactDetails;
