export const FormField = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
}) => (
  <div className="flex flex-col mt-4">
    {error && <span className="error-message">{error.message}</span>}
    <input
      type={type}
      placeholder={placeholder}
      {...register(name, { valueAsNumber })}
      className="px-2 py-1 text-black rounded"
    />
  </div>
);
