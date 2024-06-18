import { useState } from "react";
import { storeEmail } from '../service/BrevoService';
import { isValidEmail } from "../utils/validations";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sendingEmail, setSendingEmail] = useState(false);
  const [error, setError] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("El campo de email no puede estar vacío.");
      setTimeout(() => setError(""), 4000);
      return;
    }

    if (!isValidEmail(email)) {
      setError("Por favor, introduce un email válido.");
      setTimeout(() => setError(""), 4000);
      return;
    }

    setSendingEmail(true);
    const response = await storeEmail(email);

    if (response.success) {
      setEmail("");
      setTimeout(() => {
        setSendingEmail(false);
        setEmailSent(true);
        setTimeout(() => {
          setEmailSent(false);
        }, 2000);
      }, 1000);
    } else {
      if (response.error.code === "duplicate_parameter") {
        setError("Este correo electrónico ya está en uso.");
      } else {
        setError("Ocurrió un error al enviar el correo electrónico.");
      }
      setSendingEmail(false);
      setTimeout(() => setError(""), 4000);
    }
  };

  return (
    <div className="bg-white  px-10 py-6 rounded-3xl flex flex-col items-center text-center text-brown text-montserrat relative">
      <h2 className="font-bold text-2xl pb-4">CLASE GRATIS</h2>
      <p className="font-medium pb-4">
        Así como escuchaste! Si querés recibirlas, lo único que tenés que hacer
        es dejar tu email acá abajo.
      </p>
      <form onSubmit={handleSubscribe}>
        <input
          type="text"
          placeholder="ejemplo@outlook.com"
          className={` text-center mb-4 border-2 px-12 p-2 rounded-xl ${
            error ? "border-red-500" : ""
          }`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <p className="text-red-600 text-xs pb-4">{error}</p>}
        <button
          className="font-bold bg-pink px-5 py-2 rounded-xl hover:bg-pink/70 hover:scale-110 duration-300"
        >
          {sendingEmail ? (
            ""
          ) : emailSent ? (
            <>
              Te suscribiste!
            </>
          ) : (
            "Suscribirme"
          )}
        </button>
      </form>
    </div>
  );
}
