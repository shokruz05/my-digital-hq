import Link from "next/link"; // 👈 Важный импорт
import Hero3D from "./components/Hero3D";

export default function Home() {
  return (
    <main style={{
      position: 'relative',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: 'black',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      
      {/* 3D фон */}
      <Hero3D />

      {/* Контент (Z-Index 10 чтобы быть выше фона) */}
      <div style={{
        zIndex: 10,
        position: 'relative', // 👈 Важно для клика
        textAlign: 'center',
        padding: '40px',
        borderRadius: '20px',
        background: 'rgba(0,0,0,0.6)',
        border: '1px solid rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)'
      }}>
        <h1 style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          background: 'linear-gradient(to right, #4ade80, #3b82f6)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          marginBottom: '20px',
          margin: 0
        }}>
          DIGITAL HQ
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '30px' }}>
          Система активирована. Добро пожаловать.
        </p>
        
        {/* Кнопка-ссылка */}
        <Link href="/dashboard">
          <button style={{
            padding: '15px 40px',
            fontSize: '1rem',
            fontWeight: 'bold',
            color: 'black',
            backgroundColor: 'white',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 0 20px rgba(255,255,255,0.4)',
            transition: 'transform 0.2s'
          }}>
            Войти в систему
          </button>
        </Link>
      </div>

    </main>
  );
}