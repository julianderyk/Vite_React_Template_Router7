import * as React from "react";
import { cn } from "../../lib/utils";

/**
 * Input Komponente
 * Universelle Input-Komponente mit Design-System Styling
 * Unterstützt alle Standard-HTML-Input-Attribute und ist forward-ref-fähig
 * 
 * @param {Object} props - Input-Eigenschaften
 * @param {string} props.className - Zusätzliche CSS-Klassen
 * @param {string} props.type - Input-Typ (text, email, password, etc.)
 * @param {React.Ref} ref - Referenz zum Input-Element
 * 
 * @example
 * <Input type="email" placeholder="Email eingeben" />
 * <Input type="password" className="w-full" />
 */
const Input = React.forwardRef(({ className, type, ...props }, ref) => {
    return (
        <input
            type={type}
            className={cn(
                "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                className
            )}
            ref={ref}
            {...props}
        />
    );
});
Input.displayName = "Input";

export { Input };
