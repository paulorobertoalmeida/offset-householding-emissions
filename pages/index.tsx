import SearchCadastralNumber from "@/components/SearchCadastralNumber";
import React from "react";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-[80vh]">
        <div className="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] md:max-w-[400px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-6 3xl:p-![18px] bg-white undefined">

          <div className="relative flex flex-col items-center justify-center">
            <h1 className="y-2">🌿</h1>
            <h4 className="mb-3 text-xl font-bold text-center text-navy-700 dark:text-white">
              Offset your Household Carbon Footprint
            </h4>
            <div>
              <SearchCadastralNumber />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
