ALTER TABLE reports ADD COLUMN status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'resolved'));
ALTER TABLE reports ADD COLUMN resolved_at INTEGER;
CREATE INDEX IF NOT EXISTS reports_status_idx ON reports(status, created_at DESC);

CREATE TABLE IF NOT EXISTS moderation_settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at INTEGER NOT NULL
);
INSERT OR IGNORE INTO moderation_settings (key, value, updated_at) VALUES ('catalog_paused', 'false', 0);
