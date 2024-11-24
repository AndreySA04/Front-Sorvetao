import Header from "../../components/header";
import {
  $Button,
  $Container,
  $InputContainer,
  $Label,
  $Select,
  $SideContainer,
  $SmallContainer,
} from "./styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import api from "@/utils/api";
import downloadExcel from "@/utils/excelFile";
import { formatDateFromBrasil } from "@/utils/formatDate";
import { useState } from "react";
import { toast } from "react-toastify";

type conciliateData = {
  vVenda: number;
  vReal: number;
  data: string;
  taxa: number;
  pagamento: string;
  bandeira: string;
  conciliado: boolean;
};

const Home = () => {
  const [reportData, setReportData] = useState<conciliateData[]>();
  const [selectedStore, setSelectedStore] = useState<
    number | string | undefined
  >();
  const [isFileSelect, setIsFileSelect] = useState<boolean>(false);
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      await uploadFile(selectedFile);
      setIsFileSelect(true);
      e.target.value = "";
    }
  };

  const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await api.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success(response.data.message);
    } catch (error) {
      toast.error("Erro ao salvar o arquivo.");
    }
  };

  const conciliateFile = async () => {
    try {
      const response = await api.post("/conciliate", {
        tempFile: "vendas.csv",
      });

      if (Array.isArray(response.data)) {
        setReportData(response.data);
        toast.success("Dados conciliados com sucesso!");
      } else {
        toast.error("Formato de dados inesperado.");
      }
    } catch (error) {
      toast.error("Erro ao conciliar os dados.");
    }
  };

  const downloadReport = () => {
    if (!reportData || reportData.length === 0) {
      toast.error("Não há dados para exportar.");
      return;
    }
    downloadExcel(reportData, "ConciliateReport");
  };

  return (
    <>
      <Header />
      <$Container>
        <$SideContainer>
          <$SmallContainer>
            <$InputContainer>
              <$Label>Selecione a Loja</$Label>
              <$Select
                onChange={(e) => setSelectedStore(e.currentTarget.value)}
              >
                <option value={undefined}></option>
                <option value={13381369}>Loja Teste</option>
              </$Select>
            </$InputContainer>
          </$SmallContainer>
          <$SmallContainer>
            <input
              type="file"
              id="file1"
              className="hidden"
              accept=".csv"
              onChange={handleFileChange}
            />
            <$Button
              disabled={!selectedStore}
              onClick={() => document.getElementById("file1")?.click()}
            >
              Anexar CPLUG
            </$Button>
            <$Button disabled={!isFileSelect || !selectedStore} onClick={() => conciliateFile()}>
              CONCILIAR
            </$Button>
          </$SmallContainer>
          <$SmallContainer>
            <$Button disabled={!reportData} onClick={downloadReport}>
              Gerar Relatório
            </$Button>
          </$SmallContainer>
        </$SideContainer>
        {reportData && (
          <div className="overflow-x-auto max-h-[62vh] overflow-y-auto">
            <Table className="bg-gray-100 border-separate border-spacing-0 table-auto">
              <TableHeader>
                <TableRow>
                  <TableHead>Valor Venda</TableHead>
                  <TableHead>Valor Real</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Taxa</TableHead>
                  <TableHead>Método Pagamento</TableHead>
                  <TableHead>Bandeira</TableHead>
                  <TableHead>Conciliado</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reportData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      {item.vVenda === 0 ? "?" : item.vVenda}
                    </TableCell>
                    <TableCell>{item.vReal}</TableCell>
                    <TableCell>{formatDateFromBrasil(item.data)}</TableCell>
                    <TableCell>{`${item.taxa}%`}</TableCell>
                    <TableCell>{item.pagamento}</TableCell>
                    <TableCell>{item.bandeira}</TableCell>
                    <TableCell
                      className={
                        item.conciliado === false
                          ? "text-red-600"
                          : "text-lime-600"
                      }
                    >
                      {item.conciliado === true ? "Sim" : "Não"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </$Container>
    </>
  );
};

export default Home;
