export default function InputField({
  id,
  label,
  type = 'text',
  icon,
  className = '',
  ...props
}) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        <input
          id={id}
          type={type}
          className={`
            appearance-none relative block w-full
            px-3 py-3 ${icon ? 'pl-10' : ''}
            border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            focus:z-10 sm:text-sm
            ${className}
          `}
          placeholder={label}
          {...props}
        />
      </div>
    </div>
  );
}