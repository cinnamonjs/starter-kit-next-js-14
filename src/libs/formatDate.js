export function CurrentDate(date) {
  const currentDate = new Date(date);
  const formattedDate = `${currentDate.getFullYear()}-${String(
    currentDate.getMonth() + 1
  ).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}`;
  return formattedDate;
}

// caution: gen example by chatgpt
