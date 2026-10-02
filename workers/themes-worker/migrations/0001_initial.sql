CREATE TABLE IF NOT EXISTS themes (
  id TEXT PRIMARY KEY,
  owner_id TEXT NOT NULL,
  name TEXT NOT NULL,
  creator TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  accent_color TEXT NOT NULL,
  text_color TEXT NOT NULL,
  music_volume REAL NOT NULL,
  background_type TEXT NOT NULL,
  music_type TEXT NOT NULL,
  background_key TEXT NOT NULL,
  music_key TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('pending', 'published', 'rejected', 'hidden')),
  tags TEXT NOT NULL DEFAULT '[]',
  rejection_reason TEXT,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS themes_public_idx ON themes(status, created_at DESC);
CREATE INDEX IF NOT EXISTS themes_owner_idx ON themes(owner_id, created_at DESC);

CREATE TABLE IF NOT EXISTS reports (
  id TEXT PRIMARY KEY,
  theme_id TEXT NOT NULL,
  reporter_id TEXT NOT NULL,
  reason TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  UNIQUE(theme_id, reporter_id)
);

CREATE TABLE IF NOT EXISTS favorites (
  theme_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  PRIMARY KEY(theme_id, user_id)
);

CREATE TABLE IF NOT EXISTS moderation_actions (
  id TEXT PRIMARY KEY,
  theme_id TEXT NOT NULL,
  admin_id TEXT NOT NULL,
  action TEXT NOT NULL,
  detail TEXT NOT NULL DEFAULT '',
  created_at INTEGER NOT NULL
);
