export const Button = ({ children, ...props }) => (
    <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700" {...props}>
        {children}
    </button>
);