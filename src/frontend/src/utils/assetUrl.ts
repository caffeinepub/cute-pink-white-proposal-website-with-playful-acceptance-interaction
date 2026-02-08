/**
 * Utility to generate correct asset URLs that work with any base path.
 * Handles both root deployments and subdirectory deployments.
 */
export function assetUrl(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production, assets are served from the root of the deployment
  // Vite handles this automatically via import.meta.env.BASE_URL
  const base = import.meta.env.BASE_URL || '/';
  
  // Ensure proper path joining
  return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
}
