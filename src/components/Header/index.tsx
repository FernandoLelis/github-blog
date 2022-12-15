import { HeaderContainer } from "./styles";
import logoSrc from "../../assets/logoSrc.svg";

export function Header() {
    return (
        <HeaderContainer>
            <img src={logoSrc} alt="" />
        </HeaderContainer>
    )
}