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
import { formatDateFromBrasil } from "@/utils/formatDate";
import { useState } from "react";
import { toast } from "react-toastify";

type conciliateData = {
  vVenda: string | number;
  vReal: number;
  data: string;
  taxa: number;
  pagamento: string;
  bandeira: string;
  conciliado: string;
};

const Home = () => {
  const [data, setData] = useState<conciliateData[]>();
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      await uploadFile(selectedFile);
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
      const response = await api.post("/report/conciliate", {
        tempFile: "vendas.csv",
      });

      if (Array.isArray(response.data)) {
        setData(response.data);
        toast.success("Dados conciliados com sucesso!");
      } else {
        toast.error("Formato de dados inesperado.");
      }
    } catch (error) {
      toast.error("Erro ao conciliar os dados.");
    }
  };

  return (
    <>
      <Header />
      <$Container>
        <$SideContainer>
          <$SmallContainer>
            <$InputContainer>
              <$Label>Loja Selecionada</$Label>
              <$Select>
                <option value="1">Loja 1</option>
                <option value="2">Loja 2</option>
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
            <$Button onClick={() => document.getElementById("file1")?.click()}>
              Anexar CPLUG
            </$Button>
            <$Button onClick={() => conciliateFile()}>CONCILIAR</$Button>
          </$SmallContainer>
          <$SmallContainer>
            <$Button>Gerar Relatório</$Button>
          </$SmallContainer>
        </$SideContainer>
        {data && (
          <Table className="bg-gray-100 border-separate border-spacing-0">
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
              {data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.vVenda}</TableCell>
                  <TableCell>{item.vReal}</TableCell>
                  <TableCell>{formatDateFromBrasil(item.data)}</TableCell>
                  <TableCell>{`${item.taxa}%`}</TableCell>
                  <TableCell>{item.pagamento}</TableCell>
                  <TableCell>{item.bandeira}</TableCell>
                  <TableCell
                    className={
                      item.conciliado === "Não"
                        ? "text-red-600"
                        : "text-lime-600"
                    }
                  >
                    {item.conciliado}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </$Container>
    </>
  );
};

export default Home;
