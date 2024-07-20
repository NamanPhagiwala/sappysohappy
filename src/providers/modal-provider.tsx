"use client";
import React from "react";
import LoginModal from "@/components/modals/login-modal";
import AddQuestionModal from "@/components/modals/add-question-modal";
import ContactModal from "@/components/modals/contact-form";
import ThankYouModal from "@/components/modals/thank-you-modal";

const ModalProvider = () => {
  return (
    <>
      {/* Register modals here */}
      <LoginModal />
      <AddQuestionModal />
      <ContactModal />
      <ThankYouModal />
    </>
  );
};

export default ModalProvider;
