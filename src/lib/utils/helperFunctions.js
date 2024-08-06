export function strToSlug(string) {
  return string.trim().toLowerCase().replace(/\s+/g, '-');
}

export function slugToStr(slug) {
  // Replace hyphens with spaces
  let str = slug.replace(/-/g, ' ');
  // Capitalize the first letter of each word
  str = str.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
  // Return the reconstructed string
  return str;
}
export function formatDate(date) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const formattedDate = new Date(date);
  const year = formattedDate.getFullYear();
  const dateNo = formattedDate.getDate();
  const month = months[formattedDate.getMonth()];

  return `${month} ${dateNo}, ${year}`;
}
