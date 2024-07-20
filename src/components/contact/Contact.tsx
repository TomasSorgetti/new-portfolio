"use client";

import React, { useState } from "react";
import styles from "./Contact.module.css";
import { sendEmail } from "@/services/sendmail";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClipLoader from "react-spinners/ClipLoader";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });
  const handleChange = (event: any): void => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (
      (errors.name === "" && form.name !== "") ||
      (errors.subject === "" && form.subject !== "") ||
      (errors.email === "" && form.email !== "") ||
      (errors.message === "" && form.message !== "")
    ) {
      setIsLoading(true);
      try {
        const response = await sendEmail(form);
        if (response) {
          setIsLoading(false);
          setForm({
            name: "",
            subject: "",
            email: "",
            message: "",
          });
          toast.success("Se envio el correo con éxito!", {
            position: "bottom-left",
          });
          console.log("Form submitted successfully:", response);
        }
      } catch (error) {
        setIsLoading(false);
        toast.error("Ocurrio un error al enviar el correo!", {
          position: "bottom-left",
        });
        console.error("Error submitting form:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <section id="contacto" className={styles.contact_container}>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <h2>Contacto</h2>
      <p>
        Hola! Si estás interesado/a en{" "}
        <span className={styles.stronger}>colaborar en un proyecto</span>,
        tienes preguntas sobre mi trabajo, o simplemente querés saludar, ¡No
        dudes en escribirme! Estoy acá para ayudarte con
        <span className={styles.stronger}>cualquier consulta que tengas.</span>
      </p>

      <form onSubmit={handleSubmit}>
        <div className={styles.input_cont}>
          <label>Nombre:</label>
          <input
            type="text"
            onChange={handleChange}
            name="name"
            placeholder="Juan Perez"
            value={form.name}
          />
        </div>
        <div className={styles.input_cont}>
          <label>Asunto:</label>
          <input
            type="text"
            onChange={handleChange}
            name="subject"
            placeholder="Entrevista"
            value={form.subject}
          />
        </div>
        <div className={styles.input_cont}>
          <label>Email:</label>
          <input
            type="email"
            onChange={handleChange}
            name="email"
            placeholder="juanperez@mail.com"
            value={form.email}
          />
        </div>
        <div className={styles.input_cont}>
          <label>Mensaje:</label>
          <textarea
            name="message"
            onChange={handleChange}
            placeholder="Tu mensaje"
            value={form.message}
          />
        </div>
        <button
          type="submit"
          className={isLoading ? styles.button_loading : ""}
        >
          {isLoading ? (
            <div id="loader">
              <ClipLoader
                color="#3f3f3f"
                loading={isLoading}
                size={18}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
              Enviando...
            </div>
          ) : (
            "Enviar"
          )}
        </button>
      </form>
    </section>
  );
};

export default Contact;
