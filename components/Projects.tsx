import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const Projects = () => {
    return (
        <div className="px-10 w-full mt-20">
            <h1 className="text-primary text-[60px] md:text-[90px] lg:text-[120px] uppercase font-semibold">
                projects
            </h1>
            
            {/* Vito-X Project */}
            <div className="flex flex-col lg:flex-row mt-20 border-b border-primary pb-10">
                <div className="bg-[url(/images/vito-x.png)] h-[300px] md:h-[400px] lg:h-[450px] w-full lg:w-[650px] bg-cover bg-center"></div>
                <div className="w-full lg:container px-0 lg:px-10 mt-8 lg:mt-0">
                    <h1 className="text-primary text-[60px] md:text-[90px] lg:text-[120px] font-semibold">Vito-X</h1>
                    <p className="text-primary text-lg mt-4 md:mt-6">Vito-X is a web application that allows users to create and share their own projects. It features a user-friendly interface with a variety of tools for designing and editing projects, as well as the ability to collaborate with other users on shared projects.</p>
                    <Link href="https://vito-x.vercel.app">
                        <button className="text-primary text-lg font-semibold mt-8 md:mt-10 rounded-full border border-primary px-10 py-2 flex items-center gap-2">
                            Visit<ArrowRight className="text-primary" />
                        </button>
                    </Link>
                </div>
            </div>
            
            {/* Visionary Brothers Project */}
            <div className="flex flex-col lg:flex-row mt-20 border-b border-primary pb-10">
                
                <div className="w-full lg:container px-0 lg:px-10 mt-8 lg:mt-0 flex flex-col items-end" >
                    <h1 className="text-primary text-[60px] md:text-[90px] lg:text-[120px] font-semibold">Visionary Brothers</h1>
                    <p className="text-primary text-lg mt-4 md:mt-6 text-right">visionary brothers is motion graohic and motion craft studio that works on various projects including motion graphics, motion craft, and web development.</p>
                    <Link href="https://coming-vito-x.vercel.app/">
                        <button className="text-primary text-lg font-semibold mt-8 md:mt-10 rounded-full border border-primary px-10 py-2 flex items-center gap-2">
                            Visit<ArrowRight className="text-primary" />
                        </button>
                    </Link>
                </div>
                <div className="bg-[url(/images/vb.png)] bg-cover bg-center h-[300px] md:h-[400px] lg:h-[450px] w-full lg:w-[650px]"></div>
            </div>
            
            {/* Vidhi Law Office Project */}
            <div className="flex flex-col lg:flex-row mt-20 pb-10">
                <div className="bg-[url(/images/legal.png)] bg-cover bg-center h-[300px] md:h-[400px] lg:h-[450px] w-full lg:w-[650px] rounded-2xl"></div>
                <div className="w-full lg:container px-0 lg:px-10 mt-8 lg:mt-0">
                    <h1 className="text-primary text-[60px] md:text-[90px] lg:text-[120px] font-semibold">Vidhi Law Office</h1>
                    <p className="text-primary text-lg mt-4 md:mt-6">vidhi law office is a leading law firm in the city of Delhi, India. We provide legal services to individuals and businesses alike.</p>
                    <Link href="https://vidhilawoffice.com/">
                        <button className="text-primary text-lg font-semibold mt-8 md:mt-10 rounded-full border border-primary px-10 py-2 flex items-center gap-2">
                            Visit<ArrowRight className="text-primary" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Projects