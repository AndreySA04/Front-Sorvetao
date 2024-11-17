import Header from "../../components/header";
import { $Button, $Container, $InputContainer, $Label, $Select, $SideContainer, $SmallContainer } from "./styles";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import axios from "axios";
import { toast } from "react-toastify";

const Home = () => {

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
          await uploadFile(selectedFile);
          e.target.value = ''; 
        }
    };
    
    const uploadFile = async (file: File) => {
        const formData = new FormData();
        formData.append('file', file);
    
        try {
          const response = await axios.post('http://localhost:3000/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
    
          toast.success(response.data.message);
        } catch (error) {
          toast.error('Erro ao salvar o arquivo.');
        }
    };

    const dados = [
        {
          valorVenda: "$250.00",
          valorReal: "$235.00",
          data: "12/11/2024",
          taxa: 0.02,
          metodoPagamento: "Cartão de Crédito",
          bandeira: "Mastercard",
          conciliado: "Sim"
        },
        {
          valorVenda: "$300.00",
          valorReal: "$290.00",
          data: "13/11/2024",
          taxa: 0.03,
          metodoPagamento: "Débito",
          bandeira: "Visa",
          conciliado: "Não"
        },
      ];

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
                        <$Button onClick={() => document.getElementById('file1')?.click()}>Anexar CPLUG</$Button>
                        <$Button>CONCILIAR</$Button>
                    </$SmallContainer>
                    <$SmallContainer>
                        <$Button>Gerar Relatório</$Button>
                    </$SmallContainer>
                </$SideContainer>
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
                    {dados.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{item.valorVenda}</TableCell>
                        <TableCell>{item.valorReal}</TableCell>
                        <TableCell>{item.data}</TableCell>
                        <TableCell>{`${item.taxa*100}%`}</TableCell>
                        <TableCell>{item.metodoPagamento}</TableCell>
                        <TableCell>{item.bandeira}</TableCell>
                        <TableCell className={item.conciliado === 'Não' ? 'text-red-600' : 'text-lime-600'}>{item.conciliado}</TableCell>
                      </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </$Container>
        </>
    )
}

export default Home;