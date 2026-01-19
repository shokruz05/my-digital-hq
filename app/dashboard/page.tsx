import Link from "next/link";

export default function Dashboard() {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: 'black',
      color: 'white',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif',
      // Темный фон
      background: '#050505' 
    }}>
      
      {/* --- ШАПКА RGB --- */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1000px', margin: '0 auto 60px auto', paddingBottom: '20px', borderBottom: '1px solid #333' }}>
        <h1 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 'bold', 
          letterSpacing: '2px',
          // RGB ТЕКСТ
          background: 'linear-gradient(to right, #ff00ff, #00ffff, #00ff00)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          textShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
        }}>
          ГЛАВНОЕ МЕНЮ // RGB
        </h1>
        <Link href="/">
          <button style={rgbButtonStyle}>
            Выйти
          </button>
        </Link>
      </nav>

      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '60px' }}>

        {/* --- ЗОНА 1: ЛИЧНОЕ ДОСЬЕ --- */}
        <section>
          <h2 style={sectionTitle}>👤 ИДЕНТИФИКАЦИЯ</h2>
          <Link href="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ ...rgbCardStyle, display: 'flex', alignItems: 'center', gap: '30px', padding: '30px' }}>
              
              {/* АВАТАР С RGB ОБВОДКОЙ */}
              <div style={{ 
                width: '100px', 
                height: '100px', 
                borderRadius: '50%', 
                padding: '3px', // Отступ для рамки
                background: 'linear-gradient(45deg, #ff0000, #00ff00, #0000ff)', // RGB Градиент
                flexShrink: 0,
                boxShadow: '0 0 20px rgba(0,255,255,0.3)'
              }}>
                 <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', background: 'black' }}>
                    <img src="/avatar.jpg" alt="Shokirjon" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 </div>
              </div>

              <div>
                <h2 style={{ margin: 0, fontSize: '2rem', marginBottom: '5px' }}>Shokirjon</h2>
                <p style={{ margin: 0, color: '#aaa', fontSize: '1rem' }}>Full Stack Developer</p>
                <div style={{ marginTop: '15px', display: 'inline-block', padding: '5px 15px', background: '#111', color: '#00ffff', borderRadius: '20px', fontSize: '0.8rem', border: '1px solid #333', boxShadow: '0 0 10px rgba(0,255,255,0.2)' }}>
                  ● ONLINE
                </div>
              </div>
              
              {/* RGB Стрелка */}
              <div style={{ marginLeft: 'auto', fontSize: '2rem', background: 'linear-gradient(to bottom, #ff00ff, #00ffff)', WebkitBackgroundClip: 'text', color: 'transparent' }}>➔</div>
            </div>
          </Link>
        </section>

        {/* --- ЗОНА 2: СВЯЗЬ --- */}
        <section>
          <h2 style={sectionTitle}>📡 КАНАЛЫ СВЯЗИ</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            
            {/* Карточка Telegram (Свой стиль) */}
            <div style={rgbCardStyle}>
              <h3 style={{ background: 'linear-gradient(to right, #00c6ff, #0072ff)', WebkitBackgroundClip: 'text', color: 'transparent', margin: '0 0 10px 0', fontWeight: 'bold' }}>
                📢 МОЙ TELEGRAM
              </h3>
              <p style={{ color: '#ccc', marginBottom: '20px', fontSize: '0.9rem' }}>Новости, мысли и лайфстайл.</p>
              <a href="https://t.me/shok1rjon05" target="_blank" style={{ ...rgbButtonStyle, width: '100%', textAlign: 'center', display: 'block' }}>
                Перейти в канал ➔
              </a>
            </div>

            {/* Карточка Соцсети */}
            <div style={rgbCardStyle}>
              <h3 style={{ color: 'white', margin: '0 0 15px 0' }}>🌐 СОЦСЕТИ</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="https://www.instagram.com/shok1rjon05" target="_blank" style={linkButtonStyle}>
                   <span style={{color: '#d62976'}}>📸 Instagram</span>
                </a>
                <a href="https://t.me/shok1rjon05" target="_blank" style={linkButtonStyle}>
                   <span style={{color: '#0088cc'}}>✈️ Личный Telegram</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* --- ЗОНА 3: ПРОЕКТЫ --- */}
        <section>
          <h2 style={{ ...sectionTitle, color: '#00ff00' }}>🚀 ЛАБОРАТОРИЯ</h2>
          <Link href="/projects" style={{ textDecoration: 'none', display: 'block' }}>
            <div style={{ ...rgbCardStyle, transition: '0.3s', cursor: 'pointer' }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', borderBottom: '1px solid #333', paddingBottom: '15px' }}>
                  <div>
                    <h3 style={{ margin: 0, color: 'white', fontSize: '1.4rem' }}>Все разработки</h3>
                    <p style={{ margin: '5px 0 0 0', color: '#888', fontSize: '0.9rem' }}>Нажми, чтобы открыть</p>
                  </div>
                  <div style={{ background: 'linear-gradient(45deg, #ff00ff, #00ffff)', color: 'black', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>➔</div>
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
           <p style={{ color: '#666', marginBottom: '15px' }}>Нужна разработка или есть вопрос?</p>
           <a href="https://t.me/shok1rjon05" target="_blank" style={{ color: '#fff', textDecoration: 'underline' }}>
             Связаться с Shokirjon
           </a>
        </div>

      </div>
    </main>
  );
}

// --- СТИЛИ RGB ---

const sectionTitle = {
  fontSize: '0.9rem',
  color: '#888',
  marginBottom: '15px',
  letterSpacing: '1px',
  textTransform: 'uppercase' as const,
  paddingLeft: '10px',
  borderLeft: '3px solid #555'
};

// 🔥 ГЛАВНЫЙ RGB СТИЛЬ
const rgbCardStyle = {
  // Черный фон внутри, Градиентная рамка снаружи
  background: 'linear-gradient(#050505, #050505) padding-box, linear-gradient(135deg, #ff00ff, #00ffff, #00ff00) border-box',
  border: '2px solid transparent', // Прозрачная рамка, чтобы было видно градиент под ней
  borderRadius: '20px',
  padding: '25px',
  boxShadow: '0 10px 40px rgba(0,0,0,0.8), 0 0 20px rgba(0, 255, 255, 0.1)', // Легкое голубое свечение
  transition: 'transform 0.2s',
};

const rgbButtonStyle = {
  background: 'linear-gradient(90deg, #ff00ff, #00ffff)',
  color: 'black',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '8px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: '0.2s',
  boxShadow: '0 0 15px rgba(255, 0, 255, 0.4)'
};

const linkButtonStyle = {
  display: 'block',
  padding: '12px',
  background: '#111',
  textDecoration: 'none',
  borderRadius: '10px',
  border: '1px solid #333',
  fontSize: '0.95rem',
  transition: '0.2s',
};

const miniProjectBox = {
  background: '#111',
  border: '1px solid #333',
  color: '#aaa',
  padding: '15px',
  borderRadius: '10px',
  textAlign: 'center' as const,
  fontSize: '0.9rem'
};
