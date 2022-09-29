import React from "react";
import { Card, Footer, Form, ParticipantList } from "../../components";
import { Container } from "./styles";

const Settings: React.FC = () => {
  return (
    <Container>
      <Card>
        <section>
          <h2>Vamos começar!</h2>
          <Form />
          <ParticipantList />
          <Footer />
        </section>
      </Card>
    </Container>
  );
};

export default Settings;
