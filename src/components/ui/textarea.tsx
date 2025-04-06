import { cn } from "@/lib/utils";
import React from "react";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
    ({ className, ...props }, ref) => {
        return <textarea ref={ref} className={cn("w-full px-4 py-2 border rounded-md", className)} {...props} />;
    }
);
Textarea.displayName = "Textarea";