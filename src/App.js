import { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getAdvice() {
      setLoading(true);
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      console.log(data);
      setAdvice(data);
      setLoading(false);
    }
    getAdvice();
  }, []);

  const handleClick = async () => {
    setLoading(true);
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data);
    setLoading(false);
  };

  return (
    <div className="App  h-[100vh] flex items-center justify-center p-8">
      <div className="bg-[#323a49] w-full md:w-[30%] rounded-lg flex-col gap-6 flex items-center p-8 relative">
        {!loading ? (
          <>
            <span className="uppercase font-[800] text-[14px] tracking-[.25rem] text-[#52ffa8]">
              advice #{advice.slip?.id}
            </span>
            <h2 className="text-[#cee3e9] font-[700] text-center text-3xl">
              ‘‘{advice.slip?.advice} ’’
            </h2>
            <img
              src="pattern-divider-desktop.svg"
              alt="pattern"
              className="mb-6"
            />
          </>
        ) : (
          <div className="loader"></div>
        )}
        <div
          className="dice bg-[#52ffa8] rounded-full absolute -bottom-7 cursor-pointer "
          onClick={handleClick}
        >
          <img src="icon-dice.svg" alt="dice" className=" p-4" />
        </div>
      </div>
    </div>
  );
}

export default App;
