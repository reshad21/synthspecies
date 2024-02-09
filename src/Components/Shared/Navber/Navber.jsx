import { useSmoothNavber } from "../../../Context/NavberProvider";
import navimage from '../../../assets/navber.png';
import './Navber.css'; // Import a CSS file for styling (optional)

const Navber = () => {
    const { activeLink, Introduction, goSynth, Features, Resources, Revolution, scrollHandler } = useSmoothNavber();

    return (
        <>
            <div className='bg-[#102027] sticky top-0 left-0 bottom-0 right-0 z-40 clear-both'>
                <ul className='flex md:gap-0 justify-between items-center mx-auto max-w-7xl overflow-x-auto'>
                    <li className='hidden md:block'><img src={navimage} alt="" /></li>
                    <li className={`grow ${activeLink === 0 ? 'active' : ''}`}>
                        <span onClick={() => scrollHandler(Introduction, 0)} className='text-center cursor-pointer py-3 px-4 block text-base md:text-xl font-normal text-white hover:bg-[#29434e]'>Introduction</span>
                    </li>
                    <li className={`grow ${activeLink === 1 ? 'active' : ''}`}>
                        <span onClick={() => scrollHandler(goSynth, 1)} className='text-center cursor-pointer py-3 px-4 block text-base md:text-xl font-normal text-white hover:bg-[#29434e]'>WhyGoSynth?</span>
                    </li>
                    <li className={`grow ${activeLink === 2 ? 'active' : ''}`}>
                        <span onClick={() => scrollHandler(Features, 2)} className='text-center cursor-pointer py-3 px-4 block text-base md:text-xl font-normal text-white hover:bg-[#29434e]'>Features</span>
                    </li>
                    <li className={`grow ${activeLink === 3 ? 'active' : ''}`}>
                        <span onClick={() => scrollHandler(Resources, 3)} className='text-center cursor-pointer py-3 px-4 block text-base md:text-xl font-normal text-white hover:bg-[#29434e]'>Resources</span>
                    </li>
                    <li className={`grow ${activeLink === 4 ? 'active' : ''}`}>
                        <span onClick={() => scrollHandler(Revolution, 4)} className='text-center cursor-pointer py-3 px-4 block text-base md:text-xl font-normal text-white bg-[#005cb2]'>JoinTheRevolution</span>
                    </li>
                    <li className='hidden md:block'><img src={navimage} alt="" /></li>
                </ul>
            </div>
        </>
    );
};

export default Navber;
