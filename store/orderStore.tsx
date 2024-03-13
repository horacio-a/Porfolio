import { Language } from "@/components";
import { create } from "zustand";
import { persist, subscribeWithSelector } from "zustand/middleware";

interface LanguageTypes {
  Language: "Es" | "En";
  changeToEs: () => void;
  changeToEn: () => void;
}

export const useLanguage = create<LanguageTypes>()(
  subscribeWithSelector(
    persist(
      (set, get) => ({
        Language: "En",
        changeToEs: () => {
          set(() => ({ Language: "Es" }));
        },
        changeToEn: () => {
          set(() => ({ Language: "En" }));
        },
      }),
      { name: "Language" }
    )
  )
);

interface ProjectTypes {
  showCarusel: boolean;
  changeCaruselState: () => void;
}

export const useProjectCarusel = create<ProjectTypes>()(
  subscribeWithSelector((set, get) => ({
    showCarusel: false,
    changeCaruselState: () => {
      const { showCarusel } = get();
      set(() => ({ showCarusel: !showCarusel }));
    },
  }))
);
