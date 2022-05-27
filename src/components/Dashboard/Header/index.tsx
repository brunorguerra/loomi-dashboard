import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import { ProfileContext } from "../../../contexts/Dashboard/ProfileContext";
import { BoxProfile } from "./BoxProfile";

export const Header = () => {
    const { profileData } = useContext(ProfileContext);
    const [isActiveBox, setIsActiveBox] = useState(false);

    function imageOrLetter() {
        if (profileData.avatar) {
            return <img src={profileData.avatar} alt={profileData.name} />;
        } else {
            return <p>{profileData.name?.substring(0, 1).toUpperCase()}</p>;
        }
    }

    function toggleBoxProfile() {
        isActiveBox ? setIsActiveBox(false) : setIsActiveBox(true);
    }

    return (
        <Container>
            <Link to={"/"} className="link-header">
                <img src="./assets/logo.svg" alt="" />
            </Link>

            <div className="profile-header" onClick={toggleBoxProfile}>
                <p>{profileData.name}</p>
                <div className="circle">{imageOrLetter()}</div>
            </div>

            <BoxProfile isVisibleBox={isActiveBox} />
        </Container>
    );
};
