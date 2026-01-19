"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'black', color: 'white', padding: '40px 20px', fontFamily: 'Arial, sans-serif', backgroundImage: 'radial-gradient(circle at top, #112211 0%, black 60%)' }}>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <Link href="/dashboard" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: '#00ff88', marginBottom: '40px', cursor: 'pointer', transition: '0.2s', textShadow: '0 0 10px #00ff88' }}>
            <span>←</span> Вернуться в меню
          </div>
        </Link>

        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px', color: '#00ff88', textShadow: '0 0 15px #00ff88' }}>
          МОИ ПРОЕКТЫ
        </h1>
        <p style={{ color: '#888', marginBottom: '50px' }}>
          Избранные разработки и эксперименты.
        </p>

        {/* СЕТКА ПРОЕКТОВ */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}
        >
          
          {/* --- ПРОЕКТ 1 --- */}
          <motion.div variants={item} style={cardStyle}>
            <div style={imagePlaceholderStyle}>🖥️ СКРИНШОТ САЙТА</div>
            <div style={{ padding: '25px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '10px' }}>
                <h2 style={projectTitle}>Digital HQ 3D</h2>
                <span style={statusBadge}>Готово</span>
              </div>
              <p style={projectDesc}>
                Мой личный сайт-портфолио. Написан на Next.js с использованием Three.js для 3D графики.
              </p>
              <div style={tagContainer}>
                <span style={tagStyle}>React</span><span style={tagStyle}>Three.js</span><span style={tagStyle}>Next.js</span>
              </div>
              <div style={buttonContainer}>
                <button style={btnPrimary}>Смотреть сайт</button>
                <button style={btnSecondary}>GitHub</button>
              </div>
            </div>
          </motion.div>

          {/* --- ПРОЕКТ 2 --- */}
          <motion.div variants={item} style={cardStyle}>
            <div style={imagePlaceholderStyle}>🤖 БОТ</div>
            <div style={{ padding: '25px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '10px' }}>
                <h2 style={projectTitle}>AI Telegram Bot</h2>
                <span style={{...statusBadge, background: 'rgba(59, 130, 246, 0.2)', color: '#3b82f6', boxShadow: '0 0 10px rgba(59, 130, 246, 0.3)'}}>В работе</span>
              </div>
              <p style={projectDesc}>
                Умный бот для автоматизации. Подключен к OpenAI API.
              </p>
              <div style={tagContainer}>
                <span style={tagStyle}>Python</span><span style={tagStyle}>Aiogram</span><span style={tagStyle}>API</span>
              </div>
              <div style={buttonContainer}>
                <button style={btnPrimary}>Открыть бота</button>
                <button style={btnSecondary}>GitHub</button>
              </div>
            </div>
          </motion.div>

           {/* --- ПРОЕКТ 3 --- */}
           <motion.div variants={item} style={cardStyle}>
            <div style={imagePlaceholderStyle}>🪙 КРИПТА</div>
            <div style={{ padding: '25px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '10px' }}>
                <h2 style={projectTitle}>Crypto Tracker</h2>
                <span style={statusBadge}>v1.0</span>
              </div>
              <p style={projectDesc}>
                 Мониторинг курсов валют в реальном времени.
              </p>
              <div style={tagContainer}>
                <span style={tagStyle}>Next.js</span><span style={tagStyle}>Tailwind</span>
              </div>
              <div style={buttonContainer}>
                 <button style={btnPrimary}>Демо</button>
                 <button style={btnSecondary}>GitHub</button>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </main>
  );
}

// --- НЕОНОВЫЕ СТИЛИ ---
const cardStyle = {
  backgroundColor: 'rgba(0,0,0,0.8)',
  border: '1px solid #00ff88', // Неоновая рамка
  borderRadius: '16px',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column' as const,
  transition: 'transform 0.2s',
  boxShadow: '0 0 20px rgba(0, 255, 136, 0.15)' // Свечение
};

const imagePlaceholderStyle = {
  height: '180px',
  backgroundColor: '#050505',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#00ff88',
  fontSize: '1.2rem',
  borderBottom: '1px solid #00ff88',
  boxShadow: 'inset 0 0 20px rgba(0,255,136,0.1)'
};

const projectTitle = { fontSize: '1.5rem', margin: 0, color: 'white', textShadow: '0 0 5px rgba(255,255,255,0.5)' };
const projectDesc = { color: '#aaa', lineHeight: '1.5', fontSize: '0.95rem', flexGrow: 1 };
const tagContainer = { margin: '20px 0', display: 'flex', gap: '8px', flexWrap: 'wrap' as const };
const buttonContainer = { display: 'flex', gap: '10px', marginTop: 'auto' };

const tagStyle = {
  background: 'rgba(0,255,136,0.05)', 
  padding: '4px 12px', 
  borderRadius: '20px', 
  fontSize: '0.75rem', 
  color: '#00ff88',
  border: '1px solid #00ff88',
  boxShadow: '0 0 5px rgba(0,255,136,0.2)'
};

const statusBadge = {
  background: 'rgba(0, 255, 136, 0.2)',
  color: '#00ff88',
  padding: '4px 8px',
  borderRadius: '4px',
  fontSize: '0.7rem',
  fontWeight: 'bold',
  textTransform: 'uppercase' as const,
  boxShadow: '0 0 10px rgba(0, 255, 136, 0.3)',
  border: '1px solid #00ff88'
};

const btnPrimary = {
  flex: 1, padding: '10px', background: '#00ff88', color: 'black', border: 'none', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 0 15px rgba(0,255,136,0.5)'
};

const btnSecondary = {
  flex: 1, padding: '10px', background: 'transparent', color: '#00ff88', border: '1px solid #00ff88', borderRadius: '8px', fontSize: '0.9rem', cursor: 'pointer', boxShadow: '0 0 5px rgba(0,255,136,0.2)'
};
