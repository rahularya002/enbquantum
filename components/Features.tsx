'use client'
import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"

export const Features = () => {
    const container = {
        initial: {
            transition: {
                staggerChildren: 0.05
            }
        },
        hover: {
            transition: {
                staggerChildren: 0.05
            }
        }
    }
    
    const children = {
        initial: { x: 0 },
        hover: { x: -250 }
    }
    
    const children2 = {
        initial: { x: 0 },
        hover: { x: 250 }
    }
    
    return (
        <div className="flex flex-col w-full">
            <motion.div
                initial="initial"
                whileHover="hover"
                variants={container}      
                className="px-10 py-4 flex flex-col lg:flex-row items-start lg:items-center justify-between border-y border-primary">
                <div>
                    <h1 className="text-primary text-4xl uppercase">Works</h1>
                    <h3 className="text-primary text-4xl ml-6">independently</h3>
                </div>
                <motion.div
                    variants={children}
                    className="flex gap-4">
                    <ArrowRight className="text-primary mt-12" size={50}/>
                    <h1 className="uppercase text-primary text-5xl font-semibold">branding</h1>
                </motion.div>
            </motion.div>
            
            <motion.div
                initial="initial"
                whileHover="hover"
                variants={container}      
                className="px-10 py-4 flex items-center justify-between border-y border-primary overflow-x-hidden">
                <motion.div
                    variants={children2}
                    className="flex gap-4">
                    <h1 className="uppercase text-primary text-5xl font-semibold">graphic design</h1>
                    <ArrowRight className="text-primary mt-12" size={50}/>
                </motion.div>
            </motion.div>
            
            <motion.div
                initial="initial"
                whileHover="hover"
                variants={container}
                className="px-10 py-4 flex items-center justify-between border-y border-primary overflow-x-hidden">
                <motion.div
                    variants={children2}
                    className="flex gap-4">
                    <h1 className="uppercase text-primary text-5xl font-semibold">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center">
                            <h1 className="text-primary">Web D</h1>
                            <div className="text-primary">
                                <h1 className="text-6xl">esign +</h1>
                                <h1 className="text-6xl">evelopement</h1>
                            </div>
                        </div>
                    </h1>
                    <ArrowRight className="text-primary mt-12" size={50}/>
                </motion.div>
            </motion.div>
            
            <motion.div
                initial="initial"
                whileHover="hover"
                variants={container}
                className="px-10 py-4 flex items-center justify-between border-y border-primary text-primary uppercase overflow-x-hidden">
                <motion.div
                    variants={children2}
                    className="flex flex-col lg:flex-row gap-4">
                    <div className="mt-12 flex gap-4">
                        <h1 className="uppercase text-primary text-3xl font-semibold">ui ux</h1>
                        <ArrowRight className="text-primary" size={40}/>
                    </div>
                    <h1 className="text-5xl font-semibold">user experience</h1>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Features