import logoImg from "../../assets/logo.svg"
import { Container, Content } from "./styles"

interface HeaderProps {
    onOpenNewTransaction: () => void;
}

export function Header ({onOpenNewTransaction}:HeaderProps) {

    return(
        <Container>
            <Content>
            <img src={logoImg} alt=" Dt Money" />
            <button type="button" onClick={onOpenNewTransaction} >
                Nova transação
            </button>
            </Content>
        </Container>
    )
};