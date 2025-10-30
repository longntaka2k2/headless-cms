export const formatDateToDDMMYYYY = (text : string) => {
  const date = new Date(text);
  const day = date.getDate();
  const month = date.getMonth() + 1; // Tháng được đánh số từ 0 đến 11, nên cần cộng thêm 1
  const year = date.getFullYear();

  // Đảm bảo ngày, tháng và năm có 2 chữ số bằng cách thêm số 0 nếu cần thiết
  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  return `${formattedDay}/${formattedMonth}/${year}`;
}