import React, { useState, useEffect } from "react";
import { Shield } from "lucide-react";

export function CookieConsentBanner({ lang = "es", t }: { lang?: "es" | "en" | "fr", t: (key: string) => string }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleConsent = (decision: "accept" | "reject" | "configure") => {
    localStorage.setItem("cookie_consent", decision);
    setIsVisible(false);
    if (decision === "accept") {
      // Reload or trigger scripts
      window.location.reload(); 
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#16191F] border-t border-glass-border p-4 z-[9999] shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <Shield className="w-6 h-6 text-primary" />
        <div>
          <h4 className="text-sm font-bold text-white">{t("cookies.title")}</h4>
          <p className="text-xs text-on-surface-variant">{t("cookies.text")}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={() => handleConsent("accept")} className="px-4 py-2 bg-primary text-[#0F1115] rounded-xl text-xs font-bold hover:opacity-90 transition-all cursor-pointer">
          {t("cookies.accept")}
        </button>
        <button onClick={() => handleConsent("reject")} className="px-4 py-2 bg-primary text-[#0F1115] rounded-xl text-xs font-bold hover:opacity-90 transition-all cursor-pointer">
          {t("cookies.reject")}
        </button>
        <button onClick={() => handleConsent("configure")} className="px-4 py-2 bg-surface-container-high text-white rounded-xl text-xs font-bold hover:opacity-90 transition-all cursor-pointer">
          {t("cookies.configure")}
        </button>
      </div>
    </div>
  );
}
