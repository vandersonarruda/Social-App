import React from "react";
import { Ionicons } from "@expo/vector-icons";

import {
  Container,
  Title,
  Subtitle,
  ButtonBack,
  ButtonBackIcon,
} from "./styles";

export default function AuthHeader(props) {
  return (
    <Container>
      <ButtonBack
        onPress={() => {
          props.navigation.goBack();
        }}
      >
        <ButtonBackIcon>
          <Ionicons name="md-arrow-back" size={25} color="#051D3F" />
        </ButtonBackIcon>
      </ButtonBack>
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
    </Container>
  );
}
