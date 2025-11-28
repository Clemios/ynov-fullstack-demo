import clsx from 'clsx';
const Button = ({ children, primary, small, ...props }) => {
    return (
        <button className={clsx(primary && "bg-green-500 hover:bg-green-600 active:bg-green-700", "bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 active:bg-blue-700 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed active:scale-95 transition-all duration-200", small && "text-sm px-2 py-1", props.className)} {...props}>{children}</button>
    );
};

export default Button;