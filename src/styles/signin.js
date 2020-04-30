import styled from "styled-components/native";

export const Wrapper = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  margin-top: 32px;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
`;

export const Form = styled.View`
  margin: 20px 30px;
`;

export const Input = styled.View`
  margin-bottom: 10px;
`;

export const InputLabel = styled.Text`
  color: #8a8f9e;
  font-size: 14px;
  text-transform: uppercase;
`;

export const InputField = styled.TextInput`
  margin-top: 10px;
  padding: 10px;
  background-color: #ddd;
  border-radius: 10px;
  font-size: 14px;
  height: 52px;
`;

export const ButtonSignIn = styled.TouchableOpacity`
  margin-top: 30px;
  background: #e9446a;
  border-radius: 4px;
  height: 52px;
  align-items: center;
  justify-content: center;
`;

export const ButtonSignInLabel = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const ButtonSignUp = styled.TouchableOpacity`
  align-self: center;
  margin-top: 32px;
`;

export const ButtonSignUpLabel = styled.Text`
  font-size: 14px;
  color: #414959;
`;

export const Bold = styled.Text`
  color: #e9446a;
  font-weight: bold;
`;
