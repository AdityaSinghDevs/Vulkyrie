const Info = () => {
  return (
    <div className="p-14 flex items-center">
      <div className="flex gap-2 items-center">
        <div className="flex flex-col ml-15">
          <p className=" leading-relaxed text-4xl max-w-7xl">
            Jaipur, like the rest of India, has witnessed a catastrophic decline 
            in vulture populations, with numbers dropping by over 97% since 
            the 1990s. This collapse is primarily due to the use of Diclofenac, 
            a painkiller administered to livestock, which proves fatal to 
            vultures when they consume contaminated carcasses.
          </p>
          <p className=" leading-relaxed mt-4 text-4xl max-w-7xl">
            With vultures nearly wiped out, feral dog populations have 
            surged, feeding on untreated carcasses and spreading diseases. 
            Jaipur, a densely populated city, faces an increased risk of rabies 
            outbreaks, as India already accounts for 35-36% of global rabies 
            deaths.
          </p>
          <p className=" leading-relaxed mt-4 text-4xl max-w-7xl">
            Additionally, the loss of vultures has disrupted the 
            natural waste disposal system, leading to higher environmental 
            pollution and carcass accumulation near areas like Jorbeer 
            Conservation Reserve, a crucial vulture habitat in Rajasthan.
          </p>
        </div>
        <div className="w-[480px]">
          <img 
            src="/vulk1.jpg"
            alt="Vulture Close-up"
            className="w-full rounded-lg h-[660px] w-[480px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Info; 