import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

interface JsonData {
  [key: string]: any;
}

const downloadExcel = (jsonData: JsonData[], fileName: string) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Conciliação");

  // Adicionar cabeçalhos
  if (jsonData.length > 0) {
    const headers = Object.keys(jsonData[0]);
    worksheet.addRow(headers);
  }

  // Adicionar dados
  jsonData.forEach((data) => {
    const values = Object.values(data);
    worksheet.addRow(values);
  });

  // Estilização opcional
  worksheet.columns.forEach((column) => {
    column.width = 20; // Define a largura padrão de cada coluna
  });

  // Gerar arquivo e fazer download
  workbook.xlsx.writeBuffer().then((buffer) => {
    const blob = new Blob([buffer], { type: "application/octet-stream" });
    saveAs(blob, `${fileName}.xlsx`);
  });
};

export default downloadExcel