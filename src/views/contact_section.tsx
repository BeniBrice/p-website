import AnimatePresenceComponents from "../components/animate_presence_components";

export default function ContactSection() {
  return (
    <AnimatePresenceComponents
      children={
        <section className="py-20 px-5" id="contact">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">
            Get in Touch
          </h2>
          <p className="text-center  max-w-xl mx-auto text-blue-900">
            Need cybersecurity services or a custom software solution? Contact
            us now.
          </p>

          <div className="flex justify-center mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold text-white cursor-pointer ">
              <a
                href="mailto:your-email@example.com"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold text-white cursor-pointer"
              >
                Contact Us
              </a>
            </button>
          </div>
        </section>
      }
    />
  );
}
