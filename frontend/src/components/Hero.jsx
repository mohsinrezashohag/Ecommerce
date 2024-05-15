import commonStyles from '@/styles/commonStyles';
import { Link } from 'react-router-dom';

function HeroSection() {
    return (
      <div className="hero relative" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNob3BwaW5nfGVufDB8MHwwfHx8MA%3D%3D)", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '80vh', position: 'relative' }}>
    <div className="dark-overlay absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
    <div className="py-32 mx-20 flex flex-col items-start max-w-3xl text-left relative z-10">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl ">Your marketplace for best <span className="text-white-500 block mt-3">best  products deals.</span></h1>
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
