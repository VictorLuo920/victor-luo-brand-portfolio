export function strToSlug(string) {
  return string.trim().toLowerCase().replace(/\s+/g, '-');
}

export function slugToStr(slug) {
  // Replace hyphens with spaces
  let str = slug.replace(/-/g, ' ');
  // Capitalize the first letter of the first word
  str = str.charAt(0).toUpperCase() + str.slice(1);
  // Return the reconstructed string
  return str;
}
