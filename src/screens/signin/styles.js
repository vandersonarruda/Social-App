import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.SafeAreaView`
  background: #f6f7fb;
  flex: 1;
`;

export const FormContainer = styled.View`
  /* flex: 1; */
  justify-content: center;
  align-items: center;
`;

export const ErrorText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: red;
  width: 328px;
  margin-bottom: 20px;
`;

export const FormField = styled.View`
  background-color: #fff;
  width: 328px;
  height: 54px;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 16px;
`;

export const FormInput = styled.TextInput`
  position: absolute;
  width: 260px;
  left: 60px;
  padding: 10px;
`;

export const FormIcon = styled.View`
  position: absolute;
  left: 24px;
`;

export const Link = styled.Text`
  color: #7c42ff;
`;

export const ButtonConfirm = styled.TouchableOpacity`
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const ButtonGradient = styled(LinearGradient)`
  width: 328px;
  height: 54px;
  justify-content: center;
  align-items: center;
  border-radius: 28px;
`;

export const ButtonConfirmLabel = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;

export const ButtonForgot = styled.TouchableOpacity``;
export const ButtonForgotLabel = styled.Text`
  font-size: 14px;
  color: #a1afc3;
  font-weight: 600;
`;

export const ButtonPage = styled.TouchableOpacity``;
export const ButtonPageLabel = styled.Text`
  font-size: 14px;
  color: #a1afc3;
  font-weight: 600;
`;
