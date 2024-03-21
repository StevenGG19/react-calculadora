import { SafeAreaView, StatusBar } from "react-native";
import { CalculadoraScreen } from "./src/presentation/screens/CalculadoraScreen";
import { style } from "./src/config/theme/AppTheme";

function App(): React.JSX.Element {
  return (
   <SafeAreaView style = {style.background}>
      <StatusBar
        backgroundColor="black"
        barStyle="light-content"
      />
      <CalculadoraScreen></CalculadoraScreen>
   </SafeAreaView>
  );
}

export default App;
