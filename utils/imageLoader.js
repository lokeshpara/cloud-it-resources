/**
 * Helper function to get the correct image path based on the environment.
 * This ensures images work both in development and when deployed to GitHub Pages.
 * 
 * @param {string} path - The image path relative to the public directory
 * @returns {string} The complete image path
 */
export function getImagePath(path) {
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/cloud-it-resources' : '';
  
  // Ensure path starts with a slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${basePath}${normalizedPath}`;
}

export default getImagePath; 