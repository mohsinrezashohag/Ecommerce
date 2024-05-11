import commonStyles from '@/styles/commonStyles';
import { Link } from 'react-router-dom';

function HeroSection() {
    return (
        <div className="hero relative" style={{ backgroundImage:  "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '80vh' }}>
            <div className="py-32 mx-20 flex flex-col items-start max-w-3xl text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-600 sm:text-6xl ">Your marketplace for best <span className="text-blue-500">best  products deals.</span></h1>

                <p className="mt-6 text-lg max-w-prose text-gray-400">
                    Upgrade your life with our digital ecommerce solutions. Explore, experience and elevate your world with your desire products
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <Link to="/products" className={`${commonStyles.button} bg-blue-500 text-white`}>Browse trending</Link>
                    <button className={`${commonStyles.button} text-white`}>Our promise &rarr;</button>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
