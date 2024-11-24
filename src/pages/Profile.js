import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Profile = () => {
  const navigate = useNavigate(); // Inisialisasi useNavigate

  const handleLogout = () => {
    const confirmLogout = window.confirm("Apakah Anda yakin ingin logout?");
    if (confirmLogout) {
      localStorage.removeItem("user"); // Menghapus data pengguna dari localStorage
      navigate("/homepage"); // Pindah ke halaman homepage setelah logout
      window.location.reload(); // Memaksa halaman untuk ter-refresh
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Bagian Foto Profil dan Informasi Dasar */}
        <div style={styles.header}>
          <img
            src="https://png.pngtree.com/background/20230525/original/pngtree-coin-with-the-letter-l-over-it-picture-image_2728285.jpg"
            alt="Profile"
            style={styles.image}
          />
          <h3 style={styles.username}>Linda</h3>
          <p style={styles.email}>fip@jukmuh.al</p>

          {/* Tombol Logout */}
          <button style={styles.logoutBtn} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

// Definisi gaya menggunakan objek
const styles = {
  container: {

      fontFamily: "Arial, sans-serif",
      padding: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "transparent", // Latar belakang transparan
      height: "100vh", // Agar elemen center secara vertikal
    },
  card: {
    width: "596px",
    height: "600px",
    background: "#fff",
    padding: "20px",
    borderRadius: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Bayangan pada kartu
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center", // Pusatkan elemen dalam kartu
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: "300px", // Ukuran foto profil besar
    height: "300px",
    borderRadius: "50%", // Membuat gambar berbentuk lingkaran
    marginBottom: "20px", // Jarak dengan username
    objectFit: "cover", // Menyesuaikan gambar agar proporsional
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Bayangan untuk gambar
  },
  username: {
    fontSize: "24px", // Ukuran teks lebih besar
    marginBottom: "5px",
  },
  email: {
    fontSize: "18px",
    color: "#666", // Warna teks lebih lembut
    marginBottom: "20px", // Jarak antara email dan tombol logout
  },
  logoutBtn: {
    backgroundColor: "#4A628A", // Warna hijau
    color: "white", // Warna teks putih
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Bayangan untuk tombol
    transition: "background-color 0.3s ease",
  },
};

export default Profile;
