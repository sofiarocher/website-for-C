import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

interface NewsletterModalProps {
  closeModal: () => void;
}

export default function NewsletterModal({ closeModal }: NewsletterModalProps) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleSubscribe = () => {
    if (!email.trim()) {
      setError('El campo no puede estar vacío.');
    } else if (!validateEmail(email)) {
      setError('Introduce un correo electrónico válido.');
    } else {
      setError(''); // Limpia cualquier error anterior
    }
  };

  return (
    <div className='fixed inset-0 bg-black/30 flex items-center justify-center z-4 backdrop-blur-md'>
        <div className="bg-white w-full mx-2 lg:w-[400px] px-10 py-6 rounded-3xl flex flex-col items-center text-center text-brown text-montserrat relative">
            <CloseIcon className='text-black/30 absolute top-3 right-5' fontSize='medium' onClick={closeModal} />
            <h2 className="font-bold text-2xl pb-4">CLASE GRATIS</h2>
            <p className="font-medium pb-4">Así como escuchaste! Si querés recibirlas, lo único que tenés que hacer es dejar tu email acá abajo.</p>
            <input
              type="text"
              placeholder="ejemplo@outlook.com"
              className={` text-center mb-4 border-2 px-12 p-2 rounded-xl ${error ? 'border-red-500' : ''}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <p className="text-red-600 text-xs pb-4">{error}</p>}
            <button className="font-bold bg-pink px-5 py-2 rounded-xl hover:bg-pink/70 hover:scale-110 duration-300" onClick={handleSubscribe}>Suscribirme</button>
        </div>
    </div>
  )
}
