import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LogOutButton() {
  const { logout } = useAuth0();

  const handleLogout = async () => {
    // Limpiar la caché del navegador
    await clearBrowserCache();

    // Hacer logout
    await logout({ returnTo: window.location.origin });
  };

  const clearBrowserCache = () => {
    return new Promise((resolve) => {
      try {
        // Limpiar la caché del navegador
        if ('caches' in window) {
          caches.keys().then((cacheNames) => {
            cacheNames.forEach((cacheName) => {
              caches.delete(cacheName);
            });
            resolve();
          });
        } else {
          resolve();
        }
      } catch (error) {
        console.error("Error al limpiar la caché del navegador: ", error);
        resolve();
      }
    });
  };

  return (
    <div>
      <button
        className="bg-azulmarino border-2 border-slate-700 py-2 px-9 hover:bg-slate-400 rounded mx-3 font-weight-bold"
        onClick={handleLogout}
      >
        Log Out
      </button>
    </div>
  );
}

export default LogOutButton;
