export const isAuthenticated = (): boolean => {
    const token = localStorage.getItem("authToken");
    if (!token) return false;
  
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.exp * 1000 > Date.now();
    } catch {
      return false;
    }
  };
  