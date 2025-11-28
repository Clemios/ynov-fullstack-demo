const Button = ({ children, ...props }) => {
    return (
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 active:bg-blue-700 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed active:scale-95 transition-all duration-200" {...props}>{children}</button>
    );
};

export default Button;