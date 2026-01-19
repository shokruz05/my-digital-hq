import Link from "next/link";

export default function Dashboard() {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: 'black',
      color: 'white',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif',
      backgroundImage: 'radial-gradient(circle at center, #112211 0%, black 70%)' // Небольшой фон для глубины
    }}>
      
      {/* --- ШАПКА --- */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1000px', margin: '0 auto 60px auto', paddingBottom: '20px', borderBottom: '1px solid #00ff88', boxShadow: '0 4px 15px rgba(0,255,136,0.2)' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#00ff88', letterSpacing: '2px', textShadow: '0 0 10px #00ff88' }}>ГЛАВНОЕ МЕНЮ //</h1>
        <Link href="/">
          <button style={neonButtonStyle}>
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
              <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', border: '3px solid #00ff88', flexShrink: 0, boxShadow: '0 0 25px rgba(0, 255, 136, 0.5)' }}>
                 <img src="/avatar.jpg" alt="Shokirjon" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <h2 style={{ margin: 0, fontSize: '2rem', marginBottom: '5px', textShadow: '0 0 5px #fff' }}>Shokirjon</h2>
                <p style={{ margin: 0, color: '#00ff88', fontSize: '1rem' }}>Full Stack Developer • @shok1rjon05</p>
                <div style={{ marginTop: '15px', display: 'inline-block', padding: '5px 15px', background: 'rgba(0,255,136,0.1)', color: '#00ff88', borderRadius: '20px', fontSize: '0.8rem', border: '1px solid #00ff88', boxShadow: '0 0 10px rgba(0,255,136,0.3)' }}>
                  ● СТАТУС: ONLINE
                </div>
              </div>
              <div style={{ marginLeft: 'auto', fontSize: '2rem', color: '#00ff88', textShadow: '0 0 10px #00ff88' }}>➔</div>
            </div>
          </Link>
        </section>

        {/* --- ЗОНА 2: СВЯЗЬ --- */}
        <section>
          <h2 style={sectionTitle}>📡 КАНАЛЫ СВЯЗИ</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <div style={cardStyle}>
              <h3 style={{ color: '#00ff88', margin: '0 0 10px 0', textShadow: '0 0 5px #00ff88' }}>📢 МОЙ TELEGRAM</h3>
              <p style={{ color: '#ccc', marginBottom: '20px', fontSize: '0.9rem' }}>Новости, мысли и лайфстайл.</p>
              <a href="https://t.me/shok1rjon05" target="_blank" style={{ ...buttonStyle, background: '#00ff88', color: 'black', boxShadow: '0 0 20px rgba(0,255,136,0.5)' }}>
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
          <h2 style={{ ...sectionTitle, color: '#00ff88', borderColor: '#00ff88', textShadow: '0 0 10px #00ff88' }}>🚀 ЛАБОРАТОРИЯ ПРОЕКТОВ</h2>
          <Link href="/projects" style={{ textDecoration: 'none', display: 'block' }}>
            <div style={{ ...cardStyle, transition: '0.3s', cursor: 'pointer' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', borderBottom: '1px solid #00ff88', paddingBottom: '15px', boxShadow: '0 4px 10px -5px rgba(0,255,136,0.5)' }}>
                  <div>
                    <h3 style={{ margin: 0, color: 'white', fontSize: '1.4rem' }}>Все разработки</h3>
                    <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '0.9rem' }}>Нажми, чтобы открыть список</p>
                  </div>
                  <div style={{ background: '#00ff88', color: 'black', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', boxShadow: '0 0 15px #00ff88' }}>➔</div>
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

        <div style={{ textAlign: 'center', marginTop: '40px', padding: '30px', borderTop: '1px solid #111' }}>
           <p style={{ color: '#666', marginBottom: '15px' }}>Нужна разработка или есть вопрос?</p>
           <a href="https://t.me/shok1rjon05" target="_blank" style={{ color: '#00ff88', textDecoration: 'underline' }}>
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
// 🔥 НЕОНОВЫЙ СТИЛЬ КАРТОЧКИ
const cardStyle = {
  backgroundColor: 'rgba(0,0,0,0.7)',
  border: '1px solid #00ff88',          // Зеленая рамка
  borderRadius: '20px',
  padding: '25px',
  boxShadow: '0 0 15px rgba(0, 255, 136, 0.2), inset 0 0 10px rgba(0, 255, 136, 0.05)', // Свечение снаружи и внутри
  transition: 'transform 0.2s',
  backdropFilter: 'blur(10px)'
};
const buttonStyle = {
  width: '100%',
  padding: '12px',
  borderRadius: '10px',
  fontWeight: 'bold',
  textAlign: 'center' as const,
  textDecoration: 'none',
  display: 'block',
  border: 'none',
  cursor: 'pointer'
};
const linkButtonStyle = {
  display: 'block',
  padding: '12px',
  background: 'black',
  color: '#00ff88',
  textDecoration: 'none',
  borderRadius: '10px',
  border: '1px solid #00ff88', // Неоновая рамка
  fontSize: '0.95rem',
  transition: '0.2s',
  boxShadow: '0 0 5px rgba(0, 255, 136, 0.2)'
};
const miniProjectBox = {
  background: 'black',
  border: '1px solid #00ff88', // Неоновая рамка
  color: '#00ff88',
  padding: '15px',
  borderRadius: '10px',
  textAlign: 'center' as const,
  fontSize: '0.9rem',
  boxShadow: '0 0 5px rgba(0, 255, 136, 0.2)'
};
const neonButtonStyle = {
    background: 'transparent', 
    border: '1px solid #00ff88', 
    color: '#00ff88', 
    padding: '8px 20px', 
    borderRadius: '5px', 
    cursor: 'pointer',
    boxShadow: '0 0 10px rgba(0,255,136,0.3)',
    textShadow: '0 0 5px #00ff88'
}
