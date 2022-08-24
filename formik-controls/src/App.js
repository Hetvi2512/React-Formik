import "./App.css";
import EnrollmentForm from "./components/EnrollmentForm";
import FormikContainer from "./components/FormikContainer";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import { theme, ThemeProvider } from "@chakra-ui/react";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <FormikContainer />  */}
        <LoginForm />
        {/* <RegistrationForm /> */}
        {/* <EnrollmentForm /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
