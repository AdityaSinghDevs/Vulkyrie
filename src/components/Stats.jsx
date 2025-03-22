const Stats = () => {
  return (
    <div className="py-8 px-4">
      <div className="mx-auto p-8">
        <div className="mb-12">
          <div className="bg-[#f5f5f0] rounded-lg p-6 mb-4 flex justify-between">
            <img src="/graph1.png" alt="Population Decrease Graph" className="" />
            <img src="/graph2.png" alt="Population Decrease Graph" className="" />
          </div>
          <div className="">
            <button className="text-4xl font-bold uppercase rounded-full p-2 bg-[#D9D9D9]">Population Decrease</button>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold uppercase mb-6">Facts - Figures</h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start gap-2 text-4xl">
                  <span>•</span>
                  <p>A study links the vulture decline to approximately 500,000 human deaths, attributing this to increased spread of diseases like anthrax and rabies, as other scavengers like feral dogs and rats proliferated.</p>
                </li>
                <li className="flex items-start gap-2 text-4xl">
                  <span>•</span>
                  <p>The scavenging value per vulture is estimated at 590,000 INR (approximately $10,200 USD) in urban areas and 585,000 INR in rural areas.</p>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4">
                <li className="flex items-start gap-2 text-4xl">
                  <span>•</span>
                  <p>The evidence leans toward conservation efforts, including a Rs 207 crore budget for the 2020-2025 plan, with captive breeding releases started in 2021.</p>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-start gap-2 text-4xl">
                  <span>•</span>
                  <p>the lifetime value of 600 captive-breed vultures for their scavenging services was calculated to be between Rs. 160.46 million.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4">
          <a
            href="/dashboards"
            className="px-8 py-3 bg-red-500 text-white rounded-full text-lg font-semibold w-80 text-center"
          >
            <p className="text-4xl">View Dashboard</p>
          </a>
          <a
            href="/hotspots"
            className="px-8 py-3 bg-red-500 text-white rounded-full text-lg font-semibold w-80 text-center"
          >
            <p className="text-4xl">View Map</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Stats; 