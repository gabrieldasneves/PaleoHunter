import {
  Alert,
  TouchableOpacity,
  ImageBackground,
  View,
  Image,
  Text,
} from "react-native";
import { s } from "@/src/components/organisms/pages/login/styles";

export function Login() {
  const HandlePressSignup = () => {
    Alert.alert("Completed Sign Up");
  };

  const HandlePressLogin = () => {
    Alert.alert("Completed Login!");
  };
  return (
    <View>
      <TouchableOpacity onPress={HandlePressSignup}>
        <Text style={s.signup}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={HandlePressLogin}>
        <Text style={s.login}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}
