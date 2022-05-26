import { useContext } from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import { ProfileContext } from "../../../contexts/Dashboard/ProfileContext";

export const Header = () => {
    const { profileData } = useContext(ProfileContext);

    function imageOrLetter() {
        if (profileData.avatar) {
            return <img src={profileData.avatar} alt={profileData.name} />;
        } else {
            return <p>{profileData.name?.substring(0, 1).toUpperCase()}</p>;
        }
    }

    return (
        <Container>
            <Link to={"/"} className="link-header">
                <img src="./assets/logo.svg" alt="" />
            </Link>

            <div className="profile-header">
                <p>{profileData.name}</p>
                <div className="circle">{imageOrLetter()}</div>
            </div>
        </Container>
    );
};
