"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
    { label: "Missions", href: "/bureau" },
    { label: "Bureau", href: "#" },
    { label: "Evenements", href: "#" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        let ticking = false;

        const onScroll = () => {
            if (ticking) return;
            ticking = true;

            requestAnimationFrame(() => {
                setScrolled(window.scrollY > 20);
                ticking = false;
            });
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 768) setMenuOpen(false);
        };

        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return (
        <motion.header
            animate={{
                width: scrolled ? "92%" : "100%",
                y: scrolled ? 12 : 0,
            }}
            transition={
                reduceMotion
                    ? { duration: 0 }
                    : { duration: 0.35, ease: "easeOut" }
            }
            className="
                fixed
                left-1/2
                top-0
                z-50
                -translate-x-1/2
            "
        >
            <div
                className={`
                    mx-auto
                    flex
                    h-16
                    max-w-7xl
                    items-center
                    justify-between
                    px-6
                    transition-colors
                    duration-300
                    ${
                    scrolled
                        ? "rounded-2xl border border-neutral-200 bg-white/80 backdrop-blur-xl"
                        : "border border-transparent bg-transparent"
                }
                `}
            >
                {/* Logo */}
                <a
                    href="/"
                    className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/70 rounded-lg"
                >
                    <div
                        className="
                            flex
                            h-8
                            w-8
                            items-center
                            justify-center
                            rounded-lg
                            bg-black
                            text-sm
                            font-semibold
                            text-white
                        "
                    >
                        L
                    </div>

                    <span className="text-[15px] font-semibold tracking-tight text-neutral-900">
                        Assec Lybel
                    </span>
                </a>

                {/* Navigation desktop */}
                <nav className="hidden md:flex items-center gap-9">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="
                                group
                                relative
                                py-1
                                text-[13px]
                                font-medium
                                uppercase
                                tracking-[0.06em]
                                text-neutral-500
                                transition-colors
                                duration-200
                                hover:text-black
                                focus:outline-none
                                focus-visible:text-black
                            "
                        >
                            {link.label}
                            <span
                                className="
                                    absolute
                                    -bottom-0.5
                                    left-0
                                    h-px
                                    w-full
                                    origin-left
                                    scale-x-0
                                    bg-black
                                    transition-transform
                                    duration-200
                                    ease-out
                                    group-hover:scale-x-100
                                    group-focus-visible:scale-x-100
                                "
                            />
                        </a>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-3">

                    <a
                        href="#"
                        className="
                            hidden
                            sm:inline-flex
                            items-center
                            rounded-full
                            bg-black
                            px-4
                            py-2
                            text-[13px]
                            font-medium
                            text-white
                            transition-colors
                            duration-200
                            hover:bg-neutral-800
                            focus:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-black
                            focus-visible:ring-offset-2
                        "
                    >
                        Prendre Contact
                    </a>

                    <button
                        type="button"
                        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((v) => !v)}
                        className="
                            md:hidden
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-lg
                            text-neutral-700
                            transition-colors
                            hover:bg-neutral-100
                            focus:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-black
                        "
                    >
                        {menuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Menu mobile */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.nav
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: reduceMotion ? 0 : 0.2 }}
                        className="
                            md:hidden
                            mt-2
                            mx-auto
                            max-w-7xl
                            rounded-2xl
                            border
                            border-neutral-200
                            bg-white/95
                            backdrop-blur-xl
                            p-4
                            flex
                            flex-col
                            gap-1
                        "
                    >
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="
                                    rounded-lg
                                    px-3
                                    py-2.5
                                    text-sm
                                    font-medium
                                    text-neutral-700
                                    transition-colors
                                    hover:bg-neutral-100
                                    hover:text-black
                                "
                            >
                                {link.label}
                            </a>
                        ))}

                        <div className="mt-2 flex flex-col gap-2 border-t border-neutral-200 pt-3">
                            <a
                                href="#"
                                className="rounded-full bg-black px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-neutral-800"
                            >
                                Prendre Contact
                            </a>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
