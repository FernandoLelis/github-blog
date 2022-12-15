import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/Header/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

export function Profile() {
    return (
        <ProfileContainer>
            <ProfilePicture src="https://github.com/FernandoLelis.png" />

            <ProfileDetails>
                <header>
                    <h1>Fernando Lélis</h1>

                    <ExternalLink text="Github" href="#" />
                </header>
                <p>
                    Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
                </p>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faGithub} />
                        FernandoLelis
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faBuilding} />
                        Gobos do Brasil
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faUserGroup} />
                        123 seguidores
                    </li>
                </ul>
            </ProfileDetails>
        </ProfileContainer>
    )
}