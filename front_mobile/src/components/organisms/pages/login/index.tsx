import {
  Alert,
  TouchableOpacity,
  ImageBackground,
  View,
  Image,
  Text,
} from "react-native";
import { s } from "@/src/components/organisms/pages/login/styles";

export function Initial() {
  const HandlePressSignup = () => {
    Alert.alert("Completed Sign Up");
  };

  const HandlePressLogin = () => {
    Alert.alert("Completed Login!");
  };
  return (
    <View>
      <View style={s.logoContainer}>
        <Image style={s.tinyLogo} source={require("@/src/assets/logo.png")} />
        {/* <Text style={s.logoText}>Welcome to _NAME_!</Text> */}
      </View>
      <TouchableOpacity style={s.signup} onPress={HandlePressSignup}>
        <Text style={s.signupText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.login} onPress={HandlePressLogin}>
        <Text style={s.loginText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}
