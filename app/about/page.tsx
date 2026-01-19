"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'black', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        style={{ maxWidth: '800px', width: '100%' }}
      >
        
        <Link href="/dashboard" style={{ textDecoration: 'none' }}>
           <div style={{ color: '#555', marginBottom: '20px', cursor: 'pointer' }}>✖ ЗАКРЫТЬ ДОСЬЕ</div>
        </Link>

        <div style={{ background: '#111', padding: '40px', borderRadius: '30px', border: '1px solid #333', boxShadow: '0 0 50px rgba(0,255,136,0.1)' }}>
          
          <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ width: '150px', height: '150px', borderRadius: '50%', overflow: 'hidden', border: '3px solid #00ff88' }}>
               <img src="/avatar.jpg" alt="Me" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div>
              <h1 style={{ fontSize: '3rem', fontWeight: 'bold', margin: 0, color: 'white' }}>Shokirjon</h1>
              <p style={{ fontSize: '1.2rem', color: '#00ff88', marginTop: '10px' }}>Full Stack Developer // @shok1rjon05</p>
            </div>
          </div>

          <div style={{ marginTop: '40px', lineHeight: '1.8', color: '#ccc', fontSize: '1.1rem' }}>
            <p>
              Привет! Я разработчик. Люблю создавать качественные проекты и постоянно учусь новому.
            </p>
            <p>
              Моя цель — делать удобные и красивые цифровые продукты.
            </p>
          </div>

          <div style={{ marginTop: '40px' }}>
            <h3 style={{ color: '#fff', borderBottom: '1px solid #333', paddingBottom: '10px' }}>⚡ МОИ НАВЫКИ:</h3>
            <div style={{ display: 'flex', gap: '10px', marginTop: '15px', flexWrap: 'wrap' }}>
               {['JavaScript', 'React', 'Next.js', 'Python', 'Three.js', 'Tailwind'].map(skill => (
                 <span key={skill} style={{ background: 'rgba(0,255,136,0.1)', color: '#00ff88', padding: '8px 20px', borderRadius: '20px', border: '1px solid rgba(0,255,136,0.3)' }}>
                   {skill}
                 </span>
               ))}
            </div>
          </div>

        </div>

      </motion.div>
    </main>
  );
}