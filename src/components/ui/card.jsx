export const Card = ({ children, className }) => (
    <div className={`rounded-2xl shadow-lg bg-white p-4 ${className || ''}`}>
        {children}
    </div>
);

export const CardContent = ({ children }) => (
    <div className="p-2">
        {children}
    </div>
);
