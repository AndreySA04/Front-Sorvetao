import Header from "@/components/header";
import {
  $Button,
  $Container,
  $DateInput,
  $InputContainer,
  $Label,
  $Select,
  $SideContainer,
} from "./styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { formatDateFromBrasil } from "@/utils/formatDate";
import api from "@/utils/api";
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

const Report = () => {
  const [reportData, setReportData] = useState<conciliateData[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedStore, setSelectedStore] = useState<
    number | string | undefined
  >();

  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStartDate(event.target.value);
  };
  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value);
  };

  const handleGetReport = async () => {
    setLoading(true);
    try {
      const response = await api.post("/conciliate/getReport", {
        loja: Number(selectedStore),
        initDate: startDate,
        endDate: endDate,
      });

      if (Array.isArray(response.data)) {
        setReportData(response.data);
        toast.success("Dados encontrados com sucesso!");
      } else {
        toast.error("Formato de dados inesperado.");
      }
    } catch (error) {
      toast.error("Erro ao procurar os dados.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <$Container>
        <$SideContainer>
          <$InputContainer>
            <$Label>Selecione a Loja</$Label>
            <$Select onChange={(e) => setSelectedStore(e.currentTarget.value)}>
              <option value={undefined}></option>
              <option value={13381369}>Loja Teste</option>
            </$Select>
          </$InputContainer>
          <$InputContainer>
            <$Label>Data Inicial</$Label>
            <$DateInput
              type="date"
              value={startDate}
              onChange={handleStartDateChange}
              placeholder="Selecione a data"
            />
          </$InputContainer>
          <$InputContainer>
            <$Label>Data Final</$Label>
            <$DateInput
              type="date"
              value={endDate}
              onChange={handleEndDateChange}
              placeholder="Selecione a data"
            />
          </$InputContainer>
          <$InputContainer>
            <$Button
              disabled={!startDate || !endDate || !selectedStore}
              onClick={handleGetReport}
            >
              Buscar Relatório
            </$Button>
          </$InputContainer>
        </$SideContainer>
        {loading && (
          <div>Carregando Dados...</div>
        )}
        {reportData && (
          <div className="overflow-x-auto max-h-[73vh] overflow-y-auto">
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
                {reportData.map((item: any, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      {item.vVenda === "0" ? "?" : item.vVenda}
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

export default Report;
