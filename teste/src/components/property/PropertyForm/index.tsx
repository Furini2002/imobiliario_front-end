import React, { useState } from "react";
import styles from "./PropertyForm.module.css";

const PropertyForm: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Formulário enviado!\n" + JSON.stringify(form, null, 2));
    setForm({ name: "", phone: "", description: "" });
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        Não encontrou o imóvel dos seus sonhos?
      </h2>
      <p className={styles.subtitle}>
        Compartilhe conosco o que você procura e vamos ajudar a encontrar o lar ideal para você!
      </p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className={styles.fieldGroup}>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="off"
              className={styles.input}
            />
          </div>
          <div className={styles.fieldGroup}>
            <label htmlFor="phone">Telefone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              autoComplete="off"
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.fieldGroupFull}>
          <label htmlFor="description">O que está procurando?</label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            required
            rows={3}
            className={styles.textarea}
          />
        </div>
        <button type="submit" className={styles.button}>
          Enviar
        </button>
      </form>
    </section>
  );
};

export default PropertyForm;
