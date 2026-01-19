"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Projects() {
  // Анимация появления
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'black', color: 'white', padding: '40px 20px', fontFamily: 'Arial, sans-serif' }}>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Кнопка НАЗАД */}
        <Link href="/dashboard" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: '#888', marginBottom: '40px', cursor: 'pointer', transition: '0.2s' }}>
            <span>←</span> Вернуться в центр
          </div>
        </Link>

        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px', color: '#4ade80' }}>
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
                <h2 style={{ fontSize: '1.5rem', margin: 0, color: 'white' }}>Digital HQ 3D</h2>
                <span style={statusBadge}>Готово</span>
              </div>
              
              <p style={{ color: '#aaa', lineHeight: '1.5', fontSize: '0.95rem', flexGrow: 1 }}>
                Мой личный сайт-портфолио. Написан на Next.js с использованием Three.js для 3D графики. Полностью интерактивный.
              </p>

              {/* Теги */}
              <div style={{ margin: '20px 0', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span style={tagStyle}>React</span>
                <span style={tagStyle}>Three.js</span>
                <span style={tagStyle}>Next.js</span>
              </div>

              {/* Кнопки ссылок */}
              <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
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
                <h2 style={{ fontSize: '1.5rem', margin: 0, color: 'white' }}>AI Telegram Bot</h2>
                <span style={statusBadge}>В работе</span>
              </div>

              <p style={{ color: '#aaa', lineHeight: '1.5', fontSize: '0.95rem', flexGrow: 1 }}>
                Умный бот для автоматизации. Подключен к OpenAI API, умеет отвечать на вопросы и планировать задачи.
              </p>

              <div style={{ margin: '20px 0', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span style={tagStyle}>Python</span>
                <span style={tagStyle}>Aiogram</span>
                <span style={tagStyle}>API</span>
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
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
                <h2 style={{ fontSize: '1.5rem', margin: 0, color: 'white' }}>Crypto Tracker</h2>
                <span style={statusBadge}>v1.0</span>
              </div>

              <p style={{ color: '#aaa', lineHeight: '1.5', fontSize: '0.95rem', flexGrow: 1 }}>
                 Приложение для мониторинга курсов валют в реальном времени. Графики и уведомления.
              </p>

              <div style={{ margin: '20px 0', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span style={tagStyle}>Next.js</span>
                <span style={tagStyle}>Tailwind</span>
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
                 <button style={btnPrimary}>Демо</button>
                 <button style={btnSecondary}>GitHub</button>
              </div>
            </div>
          </motion.div>

          {/* --- ПРОЕКТ 4 (НОВЫЙ) --- */}
          <motion.div variants={item} style={cardStyle}>
            <div style={imagePlaceholderStyle}>📱 MOBILE</div>
            <div style={{ padding: '25px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '10px' }}>
                <h2 style={{ fontSize: '1.5rem', margin: 0, color: 'white' }}>Task App</h2>
                <span style={{...statusBadge, background: '#f59e0b', color: 'black'}}>Идея</span>
              </div>

              <p style={{ color: '#aaa', lineHeight: '1.5', fontSize: '0.95rem', flexGrow: 1 }}>
                 Мобильное приложение для управления личной эффективностью. 
              </p>

              <div style={{ margin: '20px 0', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span style={tagStyle}>React Native</span>
                <span style={tagStyle}>Firebase</span>
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
                 <button style={btnSecondary}>Скоро...</button>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </main>
  );
}

// --- СТИЛИ ---
const cardStyle = {
  backgroundColor: '#111',
  border: '1px solid #333',
  borderRadius: '16px',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column' as const,
  transition: 'transform 0.2s',
};

const imagePlaceholderStyle = {
  height: '180px',
  backgroundColor: '#222',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#555',
  fontSize: '1.2rem',
  borderBottom: '1px solid #333'
};

const tagStyle = {
  background: 'rgba(255,255,255,0.1)', 
  padding: '4px 12px', 
  borderRadius: '20px', 
  fontSize: '0.75rem', 
  color: '#ccc',
  border: '1px solid #444'
};

const statusBadge = {
  background: 'rgba(74, 222, 128, 0.2)',
  color: '#4ade80',
  padding: '4px 8px',
  borderRadius: '4px',
  fontSize: '0.7rem',
  fontWeight: 'bold',
  textTransform: 'uppercase' as const
};

const btnPrimary = {
  flex: 1,
  padding: '10px',
  background: 'white',
  color: 'black',
  border: 'none',
  borderRadius: '8px',
  fontSize: '0.9rem',
  fontWeight: 'bold',
  cursor: 'pointer',
};

const btnSecondary = {
  flex: 1,
  padding: '10px',
  background: 'transparent',
  color: 'white',
  border: '1px solid #444',
  borderRadius: '8px',
  fontSize: '0.9rem',
  cursor: 'pointer',
};