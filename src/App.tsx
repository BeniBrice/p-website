import ContactSection from "./views/contact_section";
import CyberSecuritySection from "./views/cyber_security_section";
import DataSecurity from "./views/data_security";
import FooterSection from "./views/footer_section";
import Header from "./views/header";
import SecuritySection from "./views/security_section";

function App() {
  return (
    <>
      <Header />
      <SecuritySection />
      <CyberSecuritySection />
      <DataSecurity />
      <ContactSection />
      <FooterSection />
    </>
  );
}

export default App;
