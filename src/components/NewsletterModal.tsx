import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { isValidEmail } from "../utils/validations";
import { storeEmail } from "../service/BrevoService";

interface NewsletterModalProps {
  closeModal: () => void;
}

export default function NewsletterModal({ closeModal }: NewsletterModalProps) {
  const [email, setEmail] = useState("");
  const [sendingEmail, setSendingEmail] = useState(false);
  const [error, setError] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [buttonText, setButtonText] = useState("Enviar");
  const [buttonColor, setButtonColor] = useState("bg-pink");
  const [buttonTextColor, setButtonTextColor] = useState("text-black");

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
      setButtonText("Enviado!");
      setButtonColor("bg-green-500");
      setButtonTextColor("text-white");
      setTimeout(() => {
        setSendingEmail(false);
        setEmailSent(true);
        setTimeout(() => {
          setEmailSent(false);
          setButtonText("Enviar");
          setButtonColor("bg-pink");
          setButtonTextColor("text-brown");
        }, 2000);
      }, 1000);
    } else {
      setError("Ocurrió un error al enviar el correo electrónico.");
      setButtonText("Error al enviar");
      setButtonColor("bg-red-500");
      setButtonTextColor("text-white");
      setSendingEmail(false);
      setTimeout(() => {
        setError("");
        setButtonText("Enviar");
        setButtonColor("bg-pink");
        setButtonTextColor("text-brown");
      }, 4000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-4 backdrop-blur-md">
      <div className="bg-white w-full mx-2 lg:w-[400px] px-10 py-6 rounded-3xl flex flex-col items-center text-center text-brown text-montserrat relative">
        <CloseIcon
          className="text-black/30 absolute top-3 right-5"
          fontSize="medium"
          onClick={closeModal}
        />
        <h2 className="font-bold text-2xl pb-4">NEWSLETTER</h2>
        <p className="font-medium pb-4">
          Compartiremos recetas, novedades, tips y contenido exclusivo. Sumate
          con tu mail:
        </p>
        <form onSubmit={handleSubscribe} className="flex flex-col">
          <input
            type="text"
            placeholder="ejemplo@outlook.com"
            className={`text-center mb-4 border-2 px-12 p-2 rounded-xl ${
              error ? "border-red-500" : ""
            }`}
            value={email}
            disabled={sendingEmail}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <p className="text-red-600 text-xs pb-4">{error}</p>}
          <button
            type="submit"
            className={`font-bold px-5 py-2 rounded-xl hover:scale-110 duration-300 text-brown ${buttonColor} ${buttonTextColor}`}
          >
            {buttonText}
            {emailSent}
          </button>
        </form>
      </div>
    </div>
  );
}
