export function FileInputContainer({ children }) {
    return (
        <div className="flex items-center justify-between w-full p-2 space-x-4 transition-colors duration-300 border-2 hover:border-gray-400 rounded-xl">
            {children}
        </div>
    );
}
