'use client'
import { useState } from "react";
import styles from "@/app/styles/copyEmail.module.css"
import { FaEnvelope, FaCheck } from 'react-icons/fa';

export default function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const email = "geronimo.tortosa@email.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Error al copiar el texto: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={styles['copy-button']}
    >
      {copied ? (
        <>
          <FaCheck className={styles.icon} />
          <span>¡Copiado!</span>
        </>
      ) : (
        <>
          <FaEnvelope className={styles.icon} />
          <span>geronimo.tortosa@gmail.com</span>
        </>
      )}
    </button>
  );
}