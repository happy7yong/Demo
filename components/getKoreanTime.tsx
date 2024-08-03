// getKoreanTime.js

export const getKoreanTime = () => {
  const now = new Date();
  const utcNow = now.getTime() + now.getTimezoneOffset() * 60 * 1000;
  const koreaTimeDiff = 9 * 60 * 60 * 1000;
  const koreaNow = new Date(utcNow + koreaTimeDiff);

  return {
    currentDate: koreaNow,
    currentDay: koreaNow.getDate(),
    currentMonth: koreaNow.getMonth() + 1,
    currentYear: koreaNow.getFullYear(),
    currentWeekDay: koreaNow.getDay(),
  };
};
