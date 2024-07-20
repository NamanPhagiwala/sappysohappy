import { create } from "zustand";

// types
type ModalType = "loginModal" | "addQuestion" | "contactUs" | "thankYou";

type ModalData = {
  /** validator node details modal data */
};

type State = {
  type: ModalType | null;
  data: ModalData;
  isOpen: boolean;
};

// actions
type Actions = {
  openModal: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
};

// initial state
const initialState: State = {
  type: null,
  data: {},
  isOpen: false,
};

/** hook to use modal store */
const useModalStore = create<State & Actions>((set) => ({
  ...initialState,
  openModal: (type, data = {}) => {
    set({ isOpen: true, type, data });
  },
  onClose: () => {
    set({ isOpen: false, type: null });
  },
}));

export { useModalStore };
