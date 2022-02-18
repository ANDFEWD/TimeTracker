export const formatTime = (time: number): number | string => {
  return time < 10 ? `0${time}` : time;
};
