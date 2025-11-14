export default function DataSecurity() {
  return (
    <section className="py-20 px-5 bg-gray-800 w-full" id="security">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        We Secure Your Data
      </h2>

      <div className="max-w-3xl mx-auto text-center text-gray-300 text-lg space-y-4">
        <p>
          Your company’s data is your most valuable asset. We ensure that it
          stays safe, private, and protected from cyber threats.
        </p>

        <ul className="space-y-2 flex flex-col items-center justify-center">
          <li> Encryption of sensitive information</li>
          <li> Safe data storage & backup strategies</li>
          <li> Compliance with security standards</li>
          <li> Protection against unauthorized access</li>
        </ul>
      </div>
    </section>
  );
}
