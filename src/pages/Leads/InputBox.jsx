const InputBox = ({
  label,
  type,
  placeholder,
  labelClassName,

  className,
  name,
}) => {
  return (
    <div className="flex flex-col w-3/12 ">
      <label className={`${labelClassName} roboto-bold text-sm mb-2`}>
        {label}
      </label>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={className}
      />
    </div>
  );
};

export default InputBox;
