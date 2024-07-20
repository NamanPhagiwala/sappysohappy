import { create } from "zustand";

// types
type State = {
  isMobile: boolean | null;
  userType: string;
  currentCompetition: number | null;
  competitionOwner: number | null;
};

type Actions = {
  setMobile: (type: boolean) => void;
  setUserType: (type: string) => void;
  setCurrentCompetition: (type: number) => void;
  setCompetitionOwner: (type: number) => void;
  reset: () => void;
};

// initial state
const initialState: State = {
  isMobile: null,
  userType: "professional",
  currentCompetition: null,
  competitionOwner: null,
};

// config store
const useCommonStore = create<State & Actions>((set) => ({
  ...initialState,
  setMobile: (type: boolean) => {
    set({ isMobile: type });
  },
  setUserType: (type: string) => {
    set({ userType: type });
  },
  setCurrentCompetition: (type: number) => {
    set({ currentCompetition: type });
  },
  setCompetitionOwner: (type: number) => {
    set({ competitionOwner: type });
  },
  reset: () => {
    set(initialState);
  },
}));

export { useCommonStore };
