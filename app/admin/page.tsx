"use client";
import { useEffect, useState } from "react";
import { auth, db } from "../../lib/firebaseConfig";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { collection, getDocs } from "firebase/firestore";

export default function AdminPage() {
  const [user, setUser] = useState<any>(null);
  const [kritikSaran, setKritikSaran] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user && user.email === "adminnglesesbersuara123@gmail.com") {
        setUser(user);
        fetchKritikSaran();
      } else {
        router.push("/admin-login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  const fetchKritikSaran = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "kritik_saran"));
      const data: any[] = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setKritikSaran(data);
    } catch (error) {
      console.error("Error fetching kritik dan saran: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/admin-login");
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className=" p-8 max-w-5xl mx-auto rounded-lg ">
      <h1 className="text-4xl font-extrabold text-center text-[#1A202C] mb-6">
        Admin Dashboard
      </h1>
      {user && (
        <p className="text-xl text-gray-600 text-center mb-6">
          Selamat datang, <span className="font-semibold">{user.email}</span>
        </p>
      )}

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-[#2D3748] mb-4">
          Daftar Kritik dan Saran
        </h2>

        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#8b2f31]"></div>
          </div>
        ) : kritikSaran.length > 0 ? (
          <ul className="space-y-6">
            {kritikSaran.map((item) => (
              <li
                key={item.id}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
              >
                <p className="text-lg text-gray-800 mb-3">{item.kritik}</p>
                <p className="text-sm text-gray-500">
                  {item.createdAt &&
                    new Date(item.createdAt.seconds * 1000).toLocaleString()}
                </p>
                {item.nama && (
                  <p className="text-sm text-gray-600 mt-2">
                    Dikirim oleh:{" "}
                    <span className="font-medium">{item.nama}</span>
                  </p>
                )}
                {item.userEmail && (
                  <p className="text-sm text-gray-600">
                    Email: <span className="font-medium">{item.userEmail}</span>
                  </p>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Tidak ada kritik atau saran.</p>
        )}
      </div>
    </div>
  );
}
