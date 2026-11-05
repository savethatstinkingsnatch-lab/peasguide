import { useEffect } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ZoneId } from "@/lib/plan";

export const TASKS = [
  { id: "inoculant", label: "Inoculant on the seed" },
  { id: "support", label: "Support in at sowing" },
  { id: "cover", label: "Covered until established" },
  { id: "mulch", label: "Mulched once the soil warmed" },
  { id: "picking", label: "Picking every other day" },
] as const;

export type TaskId = (typeof TASKS)[number]["id"];

export type Planting = {
  id: string;
  varietyId: string;
  sowDate: string;
  bed: string;
  notes: string;
  tasks: Record<TaskId, boolean>;
};

export function emptyTasks(): Record<TaskId, boolean> {
  return {
    inoculant: false,
    support: false,
    cover: false,
    mulch: false,
    picking: false,
  };
}

type JournalState = {
  zoneId: ZoneId;
  lastFrost: string;
  firstFrost: string;
  plannerVarietyId: string;
  plantings: Planting[];
  setZoneId: (id: ZoneId) => void;
  setLastFrost: (value: string) => void;
  setFirstFrost: (value: string) => void;
  setPlannerVarietyId: (id: string) => void;
  addPlanting: (input: { varietyId: string; sowDate: string; bed: string; notes: string }) => void;
  removePlanting: (id: string) => void;
  toggleTask: (id: string, task: TaskId) => void;
  setNotes: (id: string, notes: string) => void;
};

export const useJournal = create<JournalState>()(
  persist(
    (set) => ({
      zoneId: "6",
      lastFrost: "",
      firstFrost: "",
      plannerVarietyId: "",
      plantings: [],
      setZoneId: (zoneId) => set({ zoneId }),
      setLastFrost: (lastFrost) => set({ lastFrost }),
      setFirstFrost: (firstFrost) => set({ firstFrost }),
      setPlannerVarietyId: (plannerVarietyId) => set({ plannerVarietyId }),
      addPlanting: (input) =>
        set((state) => ({
          plantings: [
            {
              id: crypto.randomUUID(),
              varietyId: input.varietyId,
              sowDate: input.sowDate,
              bed: input.bed.trim(),
              notes: input.notes.trim(),
              tasks: emptyTasks(),
            },
            ...state.plantings,
          ].slice(0, 24),
        })),
      removePlanting: (id) =>
        set((state) => ({ plantings: state.plantings.filter((item) => item.id !== id) })),
      toggleTask: (id, task) =>
        set((state) => ({
          plantings: state.plantings.map((item) =>
            item.id === id
              ? { ...item, tasks: { ...emptyTasks(), ...item.tasks, [task]: !item.tasks?.[task] } }
              : item,
          ),
        })),
      setNotes: (id, notes) =>
        set((state) => ({
          plantings: state.plantings.map((item) => (item.id === id ? { ...item, notes } : item)),
        })),
    }),
    {
      name: "pea-plot",
      skipHydration: true,
      version: 1,
    },
  ),
);

export function useRehydrateJournal() {
  useEffect(() => {
    void useJournal.persist.rehydrate();
  }, []);
}
