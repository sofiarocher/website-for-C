import Wpp from '../assets/wpp-icon.svg';
import Ig from '../assets/ig-icon.svg';

function SocialIcon() {
    return (
        <div className="fixed bottom-4 right-4 flex items-center justify-center">
            <div className='bg-brown p-2 rounded-full shadow-xl shadow-black/50 mr-2 hover:scale-110 transition-all hidden sm:block'>
                <a href="https://www.instagram.com/soycam.vica/" target='_blank'>
                    <img src={Ig} alt="Instagram" width={32} className='' />
                </a>
            </div>
            <div className='bg-green-500 p-2 rounded-full shadow-xl shadow-black/50 hover:scale-110 transition-all'>
                <a href="https://wa.me/+5491125664998" target='_blank'>
                    <img src={Wpp} alt="WhatsApp" width={32} className='' />
                </a>
            </div>
        </div>
    );
}

export default SocialIcon;

