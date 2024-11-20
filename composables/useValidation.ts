export const useValidateMovieName = (movieName: string) => {
  const errors = [];

  if (!movieName) {
    errors.push({ message: "Le nom du film est requis." });
  }

  if (movieName.length < 3) {
    errors.push({ message: "Le nom doit comporter au moins 3 caractères." });
  }

  console.log(errors);

  return errors;
};
