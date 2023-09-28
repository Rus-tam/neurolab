export const formatDateToCustomFormat = (isoDate) => {
  const date = new Date(isoDate);

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear() % 100;

  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedYear = year < 10 ? `0${year}` : year;

  const customFormat = `${formattedHours}:${formattedMinutes} ${formattedDay}.${formattedMonth}.${formattedYear}`;

  return customFormat;
};
