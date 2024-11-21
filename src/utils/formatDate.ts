export const formatDateFromBrasil = (date: string | undefined): string => {
  if (!date) {
    return "Data Inválida";
  }

  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
};
