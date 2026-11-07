import React, { useState } from 'react';

export default function LingoHubApp() {
  const [activeTab, setActiveTab] = useState('Videos');

  // Exemple de vidéos d'apprentissage inspirées de séries
  const videos = [
    {
      id: 1,
      title: "Rachel's Awkward First Attempt at Asking a Guy Out",
      show: "Friends",
      duration: "3 min",
      level: "Débutant",
      thumbnail: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 2,
      title: "The Coffee Shop Debate",
      show: "Friends",
      duration: "5 min",
      level: "Intermédiaire",
      thumbnail: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <div style={styles.container}>
      {/* En-tête avec drapeau et flamme de série */}
      <header style={styles.header}>
        <div style={styles.langSelector}>
          <span style={{ fontSize: '24px' }}>🇬🇧</span>
          <span style={styles.dropdownArrow}>▼</span>
        </div>
        <div style={styles.streakBadge}>
          🔥 <span style={{ fontWeight: 'bold' }}>4</span>
        </div>
      </header>

      {/* Barre de navigation principale */}
      <nav style={styles.nav}>
        {['Videos', 'Podcasts', 'Books', 'Import'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              ...styles.navButton,
              color: activeTab === tab ? '#ffffff' : '#9ca3af',
              borderBottom: activeTab === tab ? '2px solid #ffffff' : '2px solid transparent'
            }}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Contenu de l'onglet Vidéos */}
      {activeTab === 'Videos' && (
        <main style={styles.mainContent}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Start here <span style={styles.arrow}>›</span></h2>
          </div>
          <p style={styles.sectionSubtitle}>Hand-picked for you: bright, simple videos to begin with. FR</p>

          {/* Carte de vidéo style Netflix/LingoPie */}
          {videos.map((vid) => (
            <div key={vid.id} style={styles.card}>
              <div style={styles.cardImageContainer}>
                <div style={styles.showOverlayTag}>{vid.show}</div>
                <div style={styles.durationTag}>{vid.duration}</div>
              </div>
              <div style={styles.cardBody}>
                <h3 style={styles.cardTitle}>{vid.title} | {vid.show}</h3>
                <p style={styles.cardInfo}>Apprends le vocabulaire en contexte réel</p>
              </div>
            </div>
          ))}
        </main>
      )}

      {activeTab !== 'Videos' && (
        <div style={styles.placeholderTab}>
          <h3>Section {activeTab} en cours de chargement...</h3>
          <p style={{ color: '#9ca3af' }}>Découvre bientôt de nouveaux contenus audio et textuels.</p>
        </div>
      )}

      {/* Barre de navigation du bas */}
      <footer style={styles.footer}>
        <div style={styles.footerItemActive}>
          <span>▶️</span>
          <span style={styles.footerTextActive}>Play</span>
        </div>
        <div style={styles.footerItem}>
          <span>📚</span>
          <span style={styles.footerText}>Vocabulary</span>
        </div>
        <div style={styles.footerItem}>
          <span>👤</span>
          <span style={styles.footerText}>Profile</span>
        </div>
      </footer>
    </div>
  );
}

// Styles inspirés des applications de streaming linguistique sombres et épurées
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    maxWidth: '420px',
    margin: '20px auto',
    backgroundColor: '#0f172a',
    color: '#ffffff',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)',
    border: '1px solid #1e293b',
    position: 'relative',
    paddingBottom: '70px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 20px 10px 20px',
  },
  langSelector: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    cursor: 'pointer',
  },
  dropdownArrow: {
    fontSize: '10px',
    color: '#9ca3af',
  },
  streakBadge: {
    backgroundColor: '#1e293b',
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  nav: {
    display: 'flex',
    gap: '20px',
    padding: '0 20px',
    borderBottom: '1px solid #1e293b',
    overflowX: 'auto',
  },
  navButton: {
    background: 'none',
    border: 'none',
    padding: '12px 0',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },
  mainContent: {
    padding: '20px',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: 0,
  },
  arrow: {
    color: '#9ca3af',
  },
  sectionSubtitle: {
    fontSize: '13px',
    color: '#9ca3af',
    marginBottom: '16px',
  },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: '16px',
    overflow: 'hidden',
    marginBottom: '20px',
    border: '1px solid #334155',
  },
  cardImageContainer: {
    height: '180px',
    backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=500&auto=format&fit=crop&q=60")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    padding: '12px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  showOverlayTag: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '4px 10px',
    borderRadius: '8px',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  durationTag: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '4px 8px',
    borderRadius: '8px',
    fontSize: '12px',
  },
  cardBody: {
    padding: '14px',
  },
  cardTitle: {
    fontSize: '15px',
    fontWeight: 'bold',
    margin: '0 0 6px 0',
  },
  cardInfo: {
    fontSize: '12px',
    color: '#9ca3af',
    margin: 0,
  },
  placeholderTab: {
    padding: '40px 20px',
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60px',
    backgroundColor: '#090d16',
    borderTop: '1px solid #1e293b',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footerItemActive: {
    display: 'flex',
    flexDirection: 'column',
    alignItem: 'center',
    color: '#3b82f6',
    fontSize: '12px',
    gap: '2px',
  },
  footerItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#64748b',
    fontSize: '12px',
    gap: '2px',
    cursor: 'pointer',
  },
  footerTextActive: {
    color: '#3b82f6',
    fontSize: '10px',
    fontWeight: 'bold',
  },
  footerText: {
    color: '#64748b',
    fontSize: '10px',
  }
};