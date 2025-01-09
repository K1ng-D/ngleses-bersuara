export default function Footer() {
  return (
    <footer className="bg-[#4CAF50] text-white pt-6">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Desa Ngleses Address */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-[#ffffff]">Desa Ngleses</h3>
          <p className="text-sm">
            Kecamatan Juwangi, Kabupaten Boyolali, Jawa Tengah
          </p>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-sm text-center font-bold mt-6 py-2 text-[#ffffff] bg-[#1b5e20] w-full">
        <p>
          &copy; {new Date().getFullYear()} Desa Ngleses. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
