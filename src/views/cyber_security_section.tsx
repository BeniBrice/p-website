import AnimatePresenceComponents from "../components/animate_presence_components";
import TitleComponents from "../components/title_components";

export default function CyberSecuritySection() {
  return (
    <AnimatePresenceComponents
      children={
        <section
          className="py-20 px-5 flex flex-col items-center justify-center gap-5"
          id="services"
        >
          <TitleComponents title="What We Do" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="bg-blue-800 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Cybersecurity
              </h3>
              <ul className="text-gray-300 space-y-1">
                <li>Network protection</li>
                <li>System security audits</li>
                <li>Vulnerability analysis</li>
                <li>Penetration testing</li>
              </ul>
            </div>

            <div className="bg-blue-800 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb- text-white">
                Software Development
              </h3>
              <ul className="text-gray-300 space-y-1">
                <li>Web applications</li>
                <li>Mobile apps</li>
                <li>API development</li>
                <li>Custom business solutions</li>
              </ul>
            </div>
          </div>
        </section>
      }
    />
  );
}
