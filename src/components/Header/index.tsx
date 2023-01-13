import { Container, Content } from './styles';
import { AiFillApple, AiOutlineSearch } from 'react-icons/ai';
import { BsBag } from 'react-icons/bs';

export function Header() {
    return (
        <Container>
            <Content>
                <AiFillApple />
                <p>teste</p>
                <AiOutlineSearch />
                <BsBag />
            </Content>
        </Container>
    )
}