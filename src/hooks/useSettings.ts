import { useState, useEffect } from "react";

const DEFAULT_SETTINGS: Record<string, string> = {
  site_name: "Mauro Monção Advogados Associados",
  contact_email: "contato@mauromoncao.adv.br",
  phone_personal: "(86) 99948-4761",
  phone_office: "(86) 99519-8919",
  phone_whatsapp: "5586994820054",
  whatsapp_cta: "5586994820054",
  whatsapp_message: "Olá! Gostaria de mais informações sobre os serviços jurídicos.",
  instagram: "https://www.instagram.com/mauromoncao.adv/",
  address: "Parnaíba - PI",
};

export function useSettings() {
  const [settings, setSettings] = useState<Record<string, string>>(DEFAULT_SETTINGS);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL ?? "";
    if (!API_URL) return;
    setIsLoading(true);
    fetch(`${API_URL}/api/trpc/settings.list`)
      .then(r => r.json())
      .then(data => {
        const arr = data?.result?.data ?? [];
        const map: Record<string, string> = { ...DEFAULT_SETTINGS };
        for (const s of arr) {
          if (s.settingKey) map[s.settingKey] = s.settingValue ?? "";
        }
        setSettings(map);
      })
      .catch(() => {})
      .finally(() => setIsLoading(false));
  }, []);

  return { settings, isLoading };
}
