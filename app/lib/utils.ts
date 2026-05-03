export const formattedDate = (date: Date = new Date()): string => {
  return date.toLocaleDateString("en-GB").split("/").join("-");
};
