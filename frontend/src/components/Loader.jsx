import Lottie from 'react-lottie';
import loaderJson from '../../src/assets/Animation - 1716595898550.json'


const Loader = () => {

    console.log("kaj korteche");

    const defaultOptions ={
    loop :false,
    autoplay : true,
    animationData : loaderJson,
    renderSettings :{
        preserveAspectRation : "xMidYMid slice"
    }
    }
    return (
        <div className="h-screen w-full  flex justify-center items-start">
            <Lottie options={defaultOptions} width={300} height={300}></Lottie>
        </div>
    );
};

export default Loader;