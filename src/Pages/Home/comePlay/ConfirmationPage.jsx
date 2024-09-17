import React from "react";
import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";
import "./ConfirmationPage.css"

const ConfirmationPage = () => {
  return (
    <>
      <ProgressBar />
      <motion.div
        className="confirmation-page-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1>Registration Confirmed!</h1>
        <p>Thank you for your payment. You are now registered for the event.</p>
      </motion.div>
    </>
  );
};

export default ConfirmationPage;