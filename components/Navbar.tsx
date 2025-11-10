'use client'

import { RadioButton } from "./ui/radio-button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className="px-4 sm:px-10 py-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-primary">NOMATTER</h1>
                </div>
                
                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-6">
                    <RadioButton
                        id="work"
                        name="category"
                        label="Work"
                    />
                    <RadioButton
                        id="services"
                        name="category"
                        label="Services"
                    />
                    <RadioButton
                        id="about"
                        name="category"
                        label="About"
                    />
                    <RadioButton
                        id="lets-talk"
                        name="category"
                        label="Lets Talk"
                    />
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-primary"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden pt-4 flex flex-col gap-4">
                    <RadioButton
                        id="work-mobile"
                        name="category"
                        label="Work"
                    />
                    <RadioButton
                        id="services-mobile"
                        name="category"
                        label="Services"
                    />
                    <RadioButton
                        id="about-mobile"
                        name="category"
                        label="About"
                    />
                    <RadioButton
                        id="lets-talk-mobile"
                        name="category"
                        label="Lets Talk"
                    />
                </div>
            )}
        </div>
    )
}

export default Navbar