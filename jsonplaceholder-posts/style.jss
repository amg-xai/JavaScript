* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: #f8fafc;
  color: #1e293b;
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Header */
.header {
  background: linear-gradient(135deg, #1e3a8a, #3b82f6);
  color: white;
  padding: 2.5rem 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.header h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
}

.header p {
  color: #dbeafe;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
}

.controls {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

#searchInput {
  flex: 1;
  min-width: 250px;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: none;
  font-size: 0.95rem;
  outline: none;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

#refreshBtn {
  background-color: #0f172a;
  color: white;
  border: none;
  padding: 0.75rem 1.4rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

#refreshBtn:hover {
  background-color: #1e293b;
  transform: translateY(-1px);
}

/* Status / Loading */
.status-message {
  text-align: center;
  padding: 2rem;
  font-size: 1.1rem;
  color: #64748b;
  font-weight: 500;
}

/* Post Cards Grid */
.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
  padding: 2.5rem 0;
}

.post-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.post-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px -3px rgba(0, 0, 0, 0.08);
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.badge-id {
  background: #eff6ff;
  color: #2563eb;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.6rem;
  border-radius: 9999px;
}

.author-id {
  font-size: 0.8rem;
  color: #94a3b8;
}

.post-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: #0f172a;
  text-transform: capitalize;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.post-body {
  color: #475569;
  font-size: 0.92rem;
  line-height: 1.6;
}