import React from "react";
import { StyledButton } from "./ContactMe.style";
import { useMediaQuery } from "@mui/material";
import ContactPageIcon from "@mui/icons-material/ContactPage";

type contactMeType = {
  showContactList: boolean;
  handleContactClick: () => void;
};

const ContactMe: React.FC<contactMeType> = ({ handleContactClick }) => {
  const mobile = useMediaQuery("(max-width:480px)");
  return (
    <>
      {mobile ? (
        <ContactPageIcon onClick={handleContactClick} />
      ) : (
        <StyledButton onClick={handleContactClick} variant="outlined">
          Contact
        </StyledButton>
      )}
    </>
  );
};
export default ContactMe;
