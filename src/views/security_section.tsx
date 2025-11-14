import AnimatePresenceComponents from "../components/animate_presence_components";
import TitleComponents from "../components/title_components";

export default function SecuritySection() {
  return (
    <AnimatePresenceComponents
      children={
        <section
          className="h-screen flex flex-col items-center justify-center text-center px-5 "
          id="home"
        >
          <TitleComponents title="Building Secure & Modern Digital Solutions" />
          <p className="text-xl text-blue-900 max-w-2xl">
            We deliver robust cybersecurity protection, high-quality software
            development, and fully secured IT infrastructures. Our mission is to
            safeguard your data, strengthen your systems, and build digital
            solutions that empower your business to operate safely and
            efficiently
          </p>
        </section>
      }
    />
  );
}
