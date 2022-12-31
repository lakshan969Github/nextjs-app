import Link from "next/link";
import Image from "next/image";
import {animate, motion} from "framer-motion";

const eventsLoad = {
    init: {
        opacity:0,
        y:100
    },
    animate:{
        opacity:1,
        y:0,
        transition: {
            type: "spring",
            stiffness: 50,
            damping: 10,
        }        
    }
}

const headerLoad = {
    init: {
        opacity:0,
        x:-500
    },
    animate:{
        opacity:1,
        x:0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
        }        
    }
}


const Homepage = ({data}) => (
    <>
        <header className="w-full h-[20vh] lg:h-[40vh] flex justify-center items-center text-3xl md:text-6xl font-body font-[500] bg-gray-200">
            <motion.h1
                variants={headerLoad}
                initial="init"
                animate="animate"
            >Global Events</motion.h1>
        </header>
        <motion.main 
            variants={eventsLoad}
            initial="init"
            animate="animate"
            className="py-[5rem] px-[3rem] md:px-[5rem] lg:px-[10rem] overflow-hidden">
            {data.map(en => (
            <Link 
                href={`/events/${en.id}`} key={en.id} passHref
                className="w-100 h-100 flex flex-col mb-20 overflow-hidden"
            >
                <div className="w-[300px] md:w-[700px] lg:w-[1000px] lg:h-[500px] overflow-hidden rounded-md">
                    <motion.div
                        whileHover={{
                            scale: 1.2,
                            transition: { duration: 1},
                        }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Image src={en.image} alt="" width={"1000"} height={"500"}/>
                    </motion.div>
                </div>
                <h2 className="text-3xl my-4 font-body">
                    {en.title} 
                </h2>
                <p className="text-[1rem] font-para font-semibold">{en.description}</p>
                <motion.button 
                    whileHover={{
                        x: 10,
                        transition: {type: 'spring', duration: 0.5},
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="text-xl mt-3 p-3 bg-black text-white rounded-lg w-[150px] md:w-[200px]">
                    See Events
                </motion.button>
            </Link>
            ))}
        </motion.main>
    </>
);

 
export default Homepage;