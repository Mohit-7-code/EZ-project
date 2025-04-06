// ServiceCarousel.tsx
import {
    ChevronLeft,
    ChevronRight,
    Code,
    Languages,
    Video,
} from "lucide-react";
import type { ReactElement } from "react";
import { useRef } from "react";

type Service = {
    title: string;
    description: string;
    icon: ReactElement;
};

const services: Service[] = [
    {
        title: "GRAPHICS & VIDEO",
        description: "Logo, banners, motion",
        icon: <Video className="w-8 h-8 text-indigo-400" />,
    },
    {
        title: "LANGUAGE & COMMUNICATION",
        description: "Copywriting, translations",
        icon: <Languages className="w-8 h-8 text-green-400" />,
    },
    {
        title: "TECHNICAL SERVICES",
        description: "Web dev, data analysis",
        icon: <Code className="w-8 h-8 text-orange-400" />,
    },
];

export default function ServiceCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = direction === "left" ? -300 : 300;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <div className="relative px-6 py-8 bg-black text-white">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
            <div className="flex items-center">
                <button onClick={() => scroll("left")} className="p-2">
                    <ChevronLeft size={32} />
                </button>

                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-6 px-2 scroll-smooth scrollbar-hide"
                >
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="min-w-[250px] bg-zinc-800 rounded-2xl p-5 shadow-lg hover:scale-105 transition-transform"
                        >
                            <div className="mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-400 text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>

                <button onClick={() => scroll("right")} className="p-2">
                    <ChevronRight size={32} />
                </button>
            </div>
        </div>
    );
}
