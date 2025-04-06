// File: lib/utils.ts

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS classes conditionally and intelligently.
 * Use this instead of className="..." to avoid conflicting classes.
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}