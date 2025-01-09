import Link from "next/link";
import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

export default function Home() {
  return (
    <div className="w-full h-screen bg-suaradesabg bg-cover bg-center">
      <div className="h-full w-full py-24 px-6 flex items-center md:items-end justify-center bg-black/70">
        <div className="w-full max-w-3xl flex flex-col items-center justify-center space-y-6">
          <div className="text-center">
            <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-snug">
              SUARAKAN <span className="text-[#4CAF50]">ASPIRASIMU</span> DAN
              <span className="text-[#4CAF50]"> PERUBAHAN!</span>
            </p>
          </div>

          <div className="space-y-2 text-center">
            <p className="text-white text-base md:text-lg">
              Kami yakin bahwa kemajuan dimulai dengan mendengarkan suara
              rakyat.
            </p>
            <p className="text-white text-base md:text-lg">
              Berawal dari inisiatif warga yang peduli terhadap lingkungan
              sekitar,
            </p>
            <p className="text-white text-base md:text-lg">
              Kami berusaha menciptakan komunitas yang lebih tangguh dan
              bersatu.
            </p>
            <p className="text-white text-base md:text-lg">
              Melalui penyampaian ide, solusi, dan partisipasi aktif.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <Link
              href="/Kritik&Saran"
              className="flex items-center gap-2 text-[#ffffff] bg-[#4CAF50] px-6 py-3 rounded-lg font-bold text-sm md:text-base transition duration-300 ease-in-out hover:bg-white hover:text-[#4CAF50]"
            >
              KIRIM ASPIRASI
              <IoArrowForwardCircleOutline
                size={24}
                className=" hover:text-[#4CAF50]"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
