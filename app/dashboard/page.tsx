import Link from "next/link";

export default function Dashboard() {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: 'black',
      color: 'white',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      
      {/* --- ШАПКА (Изменили название здесь) --- */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1000px', margin: '0 auto 60px auto', paddingBottom: '20px', borderBottom: '1px solid #333' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#00ff88', letterSpacing: '2px' }}>ГЛАВНОЕ МЕНЮ //</h1>
        <Link href="/">
          <button style={{ background: 'transparent', border: '1px solid #555', color: '#888', padding: '8px 20px', borderRadius: '5px', cursor: 'pointer' }}>
            Выйти
          </button>
        </Link>
      </nav>

      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '60px' }}>

        {/* --- ЗОНА 1: ЛИЧНОЕ ДОСЬЕ --- */}
        <section>
          <h2 style={sectionTitle}>👤 ИДЕНТИФИКАЦИЯ</h2>
          <Link href="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ ...cardStyle, display: 'flex', alignItems: 'center', gap: '30px', padding: '30px' }}>
              <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', border: '3px solid #00ff88', flexShrink: 0, boxShadow: '0 0 20px rgba(0, 255, 136, 0.3)' }}>
                 <img src="/avatar.jpg" alt="Shokirjon" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <h2 style={{ margin: 0, fontSize: '2rem', marginBottom: '5px' }}>Shokirjon</h2>
                <p style={{ margin: 0, color: '#888', fontSize: '1rem' }}>Full Stack Developer • @shok1rjon05</p>
                <div style={{ marginTop: '15px', display: 'inline-block', padding: '5px 15px', background: 'rgba(0,255,136,0.1)', color: '#00ff88', borderRadius: '20px', fontSize: '0.8rem', border: '1px solid rgba(0,255,136,0.3)' }}>
                  ● СТАТУС: ONLINE
                </div>
              </div>
              <div style={{ marginLeft: 'auto', fontSize: '2rem', color: '#333' }}>➔</div>
            </div>
          </Link>
        </section>

        {/* --- ЗОНА 2: СВЯЗЬ --- */}
        <section>
          <h2 style={sectionTitle}>📡 КАНАЛЫ СВЯЗИ</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <div style={{ ...cardStyle, border: '1px solid #00ff88' }}>
              <h3 style={{ color: '#00ff88', margin: '0 0 10px 0' }}>📢 МОЙ TELEGRAM</h3>
              <p style={{ color: '#aaa', marginBottom: '20px', fontSize: '0.9rem' }}>Новости, мысли и лайфстайл.</p>
              <a href="https://t.me/shok1rjon05" target="_blank" style={{ ...buttonStyle, background: '#00ff88', color: 'black' }}>
                Перейти в канал ➔
              </a>
            </div>
            <div style={cardStyle}>
              <h3 style={{ color: 'white', margin: '0 0 15px 0' }}>🌐 СОЦСЕТИ</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="https://www.instagram.com/shok1rjon05" target="_blank" style={linkButtonStyle}>📸 Instagram</a>
                <a href="https://t.me/shok1rjon05" target="_blank" style={linkButtonStyle}>✈️ Личный Telegram</a>
              </div>
            </div>
          </div>
        </section>

        {/* --- ЗОНА 3: ПРОЕКТЫ --- */}
        <section>
          <h2 style={{ ...sectionTitle, color: '#4ade80' }}>🚀 ЛАБОРАТОРИЯ ПРОЕКТОВ</h2>
          <Link href="/projects" style={{ textDecoration: 'none', display: 'block' }}>
            <div style={{ ...cardStyle, border: '1px solid #333', transition: '0.3s', cursor: 'pointer' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', borderBottom: '1px solid #333', paddingBottom: '15px' }}>
                  <div>
                    <h3 style={{ margin: 0, color: 'white', fontSize: '1.4rem' }}>Все разработки</h3>
                    <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '0.9rem' }}>Нажми, чтобы открыть список</p>
                  </div>
                  <div style={{ background: '#4ade80', color: 'black', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>➔</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
                <div style={miniProjectBox}>Digital HQ</div>
                <div style={miniProjectBox}>Telegram Bot</div>
                <div style={miniProjectBox}>Crypto Tracker</div>
                <div style={miniProjectBox}>...и другие</div>
              </div>
            </div>
          </Link>
        </section>

        <div style={{ textAlign: 'center', marginTop: '40px', padding: '30px', borderTop: '1px solid #222' }}>
           <p style={{ color: '#666', marginBottom: '15px' }}>Нужна разработка или есть вопрос?</p>
           <a href="https://t.me/shok1rjon05" target="_blank" style={{ color: '#fff', textDecoration: 'underline' }}>
             Связаться с Shokirjon
           </a>
        </div>
      </div>
    </main>
  );
}

// СТИЛИ
const sectionTitle = {
  fontSize: '0.9rem',
  color: '#666',
  marginBottom: '15px',
  letterSpacing: '1px',
  textTransform: 'uppercase' as const,
  paddingLeft: '10px',
  borderLeft: '3px solid #333'
};
const cardStyle = {
  backgroundColor: '#111',
  border: '1px solid #333',
  borderRadius: '20px',
  padding: '25px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
  transition: 'transform 0.2s',
};
const buttonStyle = {
  width: '100%',
  padding: '12px',
