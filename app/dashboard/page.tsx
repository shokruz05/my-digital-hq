import Link from "next/link";

export default function Dashboard() {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#050505',
      color: 'white',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif',
      overflow: 'hidden' // Чтобы анимация не дергала экран
    }}>
      
      {/* --- МАГИЯ: CSS АНИМАЦИЯ --- */}
      {/* Мы вставляем стили движения прямо сюда */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes rgbFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .rgb-text {
          background: linear-gradient(270deg, #ff0000, #ff00ff, #00ffff, #00ff00, #ff0000);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: rgbFlow 4s ease infinite;
        }

        .rgb-border {
          /* Черный фон внутри + Движущийся градиент снаружи */
          background: linear-gradient(#080808, #080808) padding-box, 
                      linear-gradient(45deg, #ff0000, #ff00ff, #00ffff, #00ff00, #ffff00, #ff0000) border-box;
          border: 3px solid transparent;
          background-size: 400% 400%; /* Увеличиваем фон, чтобы он мог двигаться */
          animation: rgbFlow 3s linear infinite; /* Скорость движения 3 секунды */
          box-shadow: 0 0 15px rgba(0,255,255,0.2);
        }
        
        .rgb-border:hover {
           box-shadow: 0 0 30px rgba(0,255,255,0.5); /* Ярче при наведении */
           transform: translateY(-5px);
        }
      `}} />

      {/* --- ШАПКА --- */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1000px', margin: '0 auto 60px auto', paddingBottom: '20px', borderBottom: '1px solid #333' }}>
        <h1 className="rgb-text" style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '2px' }}>
          ГЛАВНОЕ МЕНЮ // LIVE
        </h1>
        <Link href="/">
          <button style={outlineButtonStyle}>
            Выйти
          </button>
        </Link>
      </nav>

      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '60px' }}>

        {/* --- ЗОНА 1: ЛИЧНОЕ ДОСЬЕ --- */}
        <section>
          <h2 style={sectionTitle}>👤 ИДЕНТИФИКАЦИЯ</h2>
          <Link href="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="rgb-border" style={{ borderRadius: '20px', padding: '30px', display: 'flex', alignItems: 'center', gap: '30px', transition: '0.3s' }}>
              
              {/* АВАТАР (Тоже крутится) */}
              <div style={{ 
                width: '100px', 
                height: '100px', 
                borderRadius: '50%', 
                padding: '3px',
                background: 'linear-gradient(45deg, #ff00ff, #00ffff)',
                flexShrink: 0,
                boxShadow: '0 0 20px rgba(255,0,255,0.4)'
              }}>
                 <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', background: 'black' }}>
                    <img src="/avatar.jpg" alt="Shokirjon" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 </div>
              </div>

              <div>
                <h2 style={{ margin: 0, fontSize: '2rem', marginBottom: '5px' }}>Shokirjon</h2>
                <p style={{ margin: 0, color: '#aaa', fontSize: '1rem' }}>Full Stack Developer</p>
                <div style={{ marginTop: '15px', display: 'inline-block', padding: '5px 15px', background: '#111', color: '#00ffff', borderRadius: '20px', fontSize: '0.8rem', border: '1px solid #333' }}>
                  ● ONLINE
                </div>
              </div>
              
              <div style={{ marginLeft: 'auto', fontSize: '2rem', color: '#555' }}>➔</div>
            </div>
          </Link>
        </section>

        {/* --- ЗОНА 2: СВЯЗЬ --- */}
        <section>
          <h2 style={sectionTitle}>📡 КАНАЛЫ СВЯЗИ</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            
            {/* Telegram (С анимацией) */}
            <div className="rgb-border" style={{ borderRadius: '20px', padding: '25px', transition: '0.3s' }}>
              <h3 className="rgb-text" style={{ margin: '0 0 10px 0', fontWeight: 'bold' }}>
                📢 МОЙ TELEGRAM
              </h3>
              <p style={{ color: '#ccc', marginBottom: '20px', fontSize: '0.9rem' }}>Эксклюзивный контент.</p>
              <a href="https://t.me/shok1rjon05" target="_blank" style={gradientButtonStyle}>
                Перейти в канал ➔
              </a>
            </div>

            {/* Соцсети */}
            <div className="rgb-border" style={{ borderRadius: '20px', padding: '25px', transition: '0.3s' }}>
              <h3 style={{ color: 'white', margin: '0 0 15px 0' }}>🌐 СОЦСЕТИ</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="https://www.instagram.com/shok1rjon05" target="_blank" style={linkButtonStyle}>
                   <span style={{color: '#ff00ff'}}>📸 Instagram</span>
                </a>
                <a href="https://t.me/shok1rjon05" target="_blank" style={linkButtonStyle}>
                   <span style={{color: '#00ffff'}}>✈️ Личный Telegram</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* --- ЗОНА 3: ПРОЕКТЫ --- */}
        <section>
          <h2 style={{ ...sectionTitle, color: '#00ff00' }}>🚀 ЛАБОРАТОРИЯ</h2>
          <Link href="/projects" style={{ textDecoration: 'none', display: 'block' }}>
            <div className="rgb-border" style={{ borderRadius: '20px', padding: '25px', transition: '0.3s', cursor: 'pointer' }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', borderBottom: '1px solid #333', paddingBottom: '15px' }}>
                  <div>
                    <h3 style={{ margin: 0, color: 'white', fontSize: '1.4rem' }}>Все разработки</h3>
                    <p style={{ margin: '5px 0 0 0', color: '#888', fontSize: '0.9rem' }}>Кликни, чтобы открыть</p>
                  </div>
                  <div style={{ background: 'white', color: 'black', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>➔</div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
                <div style={miniProjectBox}>Digital HQ</div>
                <div style={miniProjectBox}>Telegram Bot</div>
                <div style={miniProjectBox}>Crypto Tracker</div>
              </div>

            </div>
          </Link>
        </section>

        <div style={{ textAlign: 'center', marginTop: '40px', padding: '30px', borderTop: '1px solid #111' }}>
           <a href="https://t.me/shok1rjon05" target="_blank" style={{ color: '#666', textDecoration: 'underline' }}>
             Связаться с Shokirjon
           </a>
        </div>

      </div>
    </main>
  );
}

// --- ОБЫЧНЫЕ СТИЛИ ---

const sectionTitle = {
  fontSize: '0.9rem',
  color: '#888',
  marginBottom: '15px',
  letterSpacing: '1px',
  textTransform: 'uppercase' as const,
  paddingLeft: '10px',
  borderLeft: '3px solid #555'
};

const gradientButtonStyle = {
  background: 'linear-gradient(90deg, #ff00ff, #00ffff)',
  color: 'black',
  border: 'none',
  padding: '12px',
  width: '100%',
  textAlign: 'center' as const,
  borderRadius: '8px',
  fontWeight: 'bold',
  cursor: 'pointer',
  textDecoration: 'none',
  display: 'block'
};

const outlineButtonStyle = {
  background: 'transparent',
  border: '1px solid #555',
  color: '#aaa',
  padding: '8px 20px',
  borderRadius: '5px',
  cursor: 'pointer'
};

const linkButtonStyle = {
  display: 'block',
  padding: '12px',
  background: '#050505',
  textDecoration: 'none',
  borderRadius: '10px',
  border: '1px solid #333',
  fontSize: '0.95rem',
  transition: '0.2s',
};

const miniProjectBox = {
  background: '#050505',
  border: '1px solid #333',
  color: '#aaa',
  padding: '15px',
  borderRadius: '10px',
  textAlign: 'center' as const,
  fontSize: '0.9rem'
};
