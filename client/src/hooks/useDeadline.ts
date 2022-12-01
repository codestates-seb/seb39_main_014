const useDeadline = (date: string | undefined) => {
  if (date) {
    const createdAtDay = new Date(date);
    const today = new Date();
    const dayGap = today.getTime() - createdAtDay.getTime();
    const result = Math.ceil(dayGap / (1000 * 60 * 60 * 24));
    const deadline = 30 - Number(result);
    return deadline;
  } else if (typeof date === "undefined") {
    return;
  }
};

export default useDeadline;
