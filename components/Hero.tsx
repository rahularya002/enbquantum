import { ArrowDown } from "lucide-react"
import SplineScene from "./SplineScene"

export const Hero = () => {
    return (
        <div className="px-4 sm:px-10 w-full">
            <div className="flex mt-8 sm:mt-16">
                <h1 className="text-4xl sm:text-6xl lg:text-8xl uppercase text-primary tracking-tight">
                    enb quantums.
                </h1>
            </div>
            
            <SplineScene/>
            
            <div className="flex justify-end mt-10 sm:mt-20 mr-0 sm:mr-10">
                <div className="relative sm:absolute sm:top-[60%] w-full sm:max-w-[420px]">
                    <h1 className="uppercase text-xl sm:text-2xl lg:text-3xl font-bold text-primary">
                        Where Design Matters, No Matter what.
                    </h1>
                    <p className="text-primary text-base sm:text-lg mt-4 sm:mt-8">
                        At enbquantums, we specialize in a diverse range of creative projects, including branding, graphic design, web development, user experience (UX) design, and interior design, catering to our clients' unique needs and delivering innovative solutions with unwavering dedication.
                    </p>
                    <div className="mt-6 sm:mt-12 flex">
                        <ArrowDown className="text-primary"/>
                        <ArrowDown className="text-primary"/>
                        <ArrowDown className="text-primary"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero