const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, "");

export default function withBase(path = "/") {
  if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (baseUrl && (normalizedPath === baseUrl || normalizedPath.startsWith(`${baseUrl}/`))) {
    return normalizedPath;
  }

  return `${baseUrl}${normalizedPath}`;
}
