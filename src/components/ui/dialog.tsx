import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Dialog({ children }: { children: ReactNode }) {
    return <div>{children}</div>;
}

export function DialogTrigger({ asChild, children }: { asChild?: boolean; children: ReactNode }) {
    return <>{children}</>;
}

export function DialogContent({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <div
            className={cn(
                "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 shadow-xl rounded-lg z-50 w-full max-w-lg",
                className
            )}
        >
            {children}
        </div>
    );
}

export function DialogHeader({ children }: { children: ReactNode }) {
    return <div className="mb-4">{children}</div>;
}

export function DialogTitle({ children }: { children: ReactNode }) {
    return <h2 className="text-xl font-semibold text-gray-800">{children}</h2>;
}

