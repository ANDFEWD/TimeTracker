export const timeInSecond = (
  hours: number,
  minutes: number,
  seconds: number
): string => {
  const hoursInSec = hours * 3600;
  const minutesInSec = minutes * 60;

  return `${hoursInSec + minutesInSec + seconds}`;
};
