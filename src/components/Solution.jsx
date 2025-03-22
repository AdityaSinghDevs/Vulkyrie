const Solution = () => {
  return (
    <div className="py-16">
      <div className="mx-auto px-4 flex flex-col items-center">

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <div className="bg-black text-white p-6 rounded-lg transform rotate-45">
            <div className="transform -rotate-45">
              <p className="text-center text-2xl">Take<br />Sample</p>
            </div>
          </div>
          <d text-2xliv className="text-red-500 text-2xl">→</d>
          <div className="bg-black text-white p-6 rounded-lg transform rotate-45">
            <div className="transform -rotate-45">
              <p className="text-center text-2xl">Use<br />Device</p>
            </div>
          </div>
          <div className="text-red-500 text-2xl">→</div>
          <div className="bg-black text-white p-6 rounded-lg transform rotate-45">
            <div className="transform -rotate-45">
              <p className="text-center text-2xl">Data<br />Recorded</p>
            </div>
          </div>
        </div>

        <div className="p-12">
          <div className="bg-red-500 text-white p-12 rounded-lg text-3xl">
            <p className="mb-4">
              A study links the vulture decline to approximately 500,000 human deaths, attributing this to increased spread of diseases like anthrax and rabies, as other scavengers like feral dogs and rats proliferated
            </p>
            <h3 className="font-bold mb-2">Comparison with ELISA & Current Methods</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                ELISA Tests: Highly accurate but costly (₹600-₹1200 per test), lab-dependent, and
                slow (requiring skilled personnel and centralized facilities).
              </li>
              <li>
                Current Field Testing (None or Limited Lab Access): No scalable, on-site solution,
                making Diclofenac detection difficult in rural/slaughterhouse settings.
              </li>
              <li>
                Our Kit: Affordable (&lt;₹100 per test), portable, real-time detection, and easy to use,
                making it ideal for slaughterhouses, veterinary checkpoints, and conservation areas
                like Jorbeer.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;