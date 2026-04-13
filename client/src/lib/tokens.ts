// Simple token generation for frontend-only auth (not cryptographically secure)
export const tokenAuth = {
  generateToken(uid: string, email: string): string {
    const payload = {
      uid,
      email,
      iat: Date.now(),
      exp: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
    };
    const header = { alg: "HS256", typ: "JWT" };
    const encodedHeader = btoa(JSON.stringify(header));
    const encodedPayload = btoa(JSON.stringify(payload));
    // Simple fake signature using random string
    const signature = btoa(Math.random().toString(36).substring(2, 15));
    return `${encodedHeader}.${encodedPayload}.${signature}`;
  },

  verifyToken(token: string): { uid: string; email: string } | null {
    try {
      const parts = token.split(".");
      if (parts.length !== 3) return null;
      const payload = JSON.parse(atob(parts[1]));
      if (payload.exp < Date.now()) return null;
      return { uid: payload.uid, email: payload.email };
    } catch {
      return null;
    }
  },
};
