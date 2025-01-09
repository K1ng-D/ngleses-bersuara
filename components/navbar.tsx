"use client";
import { useEffect, useState } from "react";
import { auth } from "../lib/firebaseConfig"; // Pastikan auth sudah diatur dengan benar
import { signOut } from "firebase/auth"; // Import fungsi signOut untuk logout
import { useRouter } from "next/navigation"; // Untuk routing menggunakan useRouter
import Link from "next/link";

export default function Navbar() {
  const [user, setUser] = useState<any>(null); // Menyimpan data pengguna yang login
  const [isClient, setIsClient] = useState(false); // Untuk memastikan client-side rendering
  const router = useRouter(); // Router untuk navigasi

  // Mengatur status login pengguna dengan onAuthStateChanged
  useEffect(() => {
    setIsClient(true); // Pastikan bahwa kita hanya menjalankan logika ini setelah client-side rendering
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); // Jika pengguna login, set user dengan data pengguna
    });

    // Cleanup ketika komponen dibersihkan
    return () => unsubscribe();
  }, []);

  // Fungsi untuk logout
  const handleLogout = async () => {
    try {
      await signOut(auth); // Logout dari Firebase
      router.push("/Login"); // Arahkan pengguna ke halaman login setelah logout
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  if (!isClient) {
    return null; // Render nothing until we are sure it's client-side
  }

  return (
    <nav className="fixed top-0 w-full z-30 bg-[#4CAF50] p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <img
            src="/assets/image/logoNgleses.png"
            alt="Logo"
            className="w-20 h-30"
          />
        </Link>
      </div>

      {/* Tombol Login/Logout */}
      <div>
        {user ? (
          <button
            onClick={handleLogout}
            className="text-[#4CAF50] font-bold p-2 bg-[#ffffff] rounded"
          >
            Logout
          </button>
        ) : (
          <Link href="/Login">
            <button className="text-[#4CAF50] font-bold p-2 bg-white rounded">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}
