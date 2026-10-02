const blocked = new Set([
  "nigger", "nigga", "faggot", "kike", "spic", "chink", "gook", "wetback", "retard", "tranny", "dyke"
]);

function normalized(value) {
  return value.normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/[@4]/g, "a").replace(/[1!|]/g, "i")
    .replace(/3/g, "e").replace(/0/g, "o").replace(/[$5]/g, "s")
    .replace(/7/g, "t").replace(/9/g, "g").replace(/(.)\1{2,}/g, "$1$1");
}

export function containsBlockedLanguage(value) {
  const words = normalized(value).match(/[a-z]+/g) || [];
  for (let start = 0; start < words.length; start++) {
    let joined = "";
    for (let end = start; end < Math.min(words.length, start + 12); end++) {
      joined += words[end];
      if (joined.length > 15) break;
      if (blocked.has(normalized(joined))) return true;
    }
  }
  return false;
}

export function validateThemeName(value) {
  if (typeof value !== "string") throw new Error("Enter a theme name.");
  const name = value.normalize("NFKC").trim();
  if (!name || name.length > 40) throw new Error("Theme name must be 1 to 40 characters.");
  if (/[\u0000-\u001f\u007f-\u009f\u200b-\u200f\u202a-\u202e\u2060-\u206f]/u.test(name)) {
    throw new Error("Theme name contains unsupported characters.");
  }
  if (containsBlockedLanguage(name)) throw new Error("Theme name contains blocked language.");
  return name;
}

export function validateThemeDescription(value) {
  if (typeof value !== "string" || value.length > 250) throw new Error("Description must be under 250 characters.");
  if (/[\u0000-\u0009\u000b-\u000c\u000e-\u001f\u007f-\u009f\u200b-\u200f\u202a-\u202e\u2060-\u206f]/u.test(value) || containsBlockedLanguage(value)) {
    throw new Error("Description contains blocked language or unsupported characters.");
  }
  return value.trim();
}
