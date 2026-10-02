CREATE TABLE IF NOT EXISTS theme_uses (
  theme_id TEXT NOT NULL,
  client_id TEXT NOT NULL,
  first_seen INTEGER NOT NULL,
  last_seen INTEGER NOT NULL,
  PRIMARY KEY (theme_id, client_id)
);

CREATE INDEX IF NOT EXISTS theme_uses_theme_idx ON theme_uses(theme_id);
