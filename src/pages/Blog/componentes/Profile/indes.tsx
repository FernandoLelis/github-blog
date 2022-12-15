import { ExternalLink } from "../../../../components/Header/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";

export function Profile() {
    return (
        <ProfileContainer>
            <ProfilePicture src="https://github.com/FernandoLelis.png" />

            <ProfileDetails>
                <header>
                    <h1>Fernando Lélis</h1>

                    <ExternalLink text="Github" href="#" />
                </header>
            </ProfileDetails>
        </ProfileContainer>
    )
}