export const calculationTime = (timeInSeconds: number) => {
  if (!timeInSeconds) return "00:00:00";

  return new Date(timeInSeconds * 1000).toISOString().substr(11, 8);
};
