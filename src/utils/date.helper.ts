export const formatDate = (dateAsString: string) => {
  const date = new Date(dateAsString);

  const mm = date.getMonth() + 1;
  const dd = date.getDate();
  const yy = date.getFullYear().toString().slice(-2);

  return `${mm}.${dd}.${yy}`;
};
