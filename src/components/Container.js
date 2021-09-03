import React from "react";
import { Container } from "@material-ui/core";

const Cntnr = ({ children }) => {
  return (
    <Container maxWidth="xs" style={{ backgroundColor: "#b491c8" }}>
      {children}
    </Container>
  );
};

export default Cntnr;
