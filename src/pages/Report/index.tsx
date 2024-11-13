import Header from "@/components/header"
import { $Container, $Input, $InputContainer, $Label, $SideContainer } from "./styles";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"  

const Report = () => {
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
                    <$InputContainer>
                        <$Label>Buscar Relatório</$Label>
                        <$Input type="text">
                        </$Input>
                    </$InputContainer>
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

export default Report;