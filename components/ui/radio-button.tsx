interface RadioProps {
    id: string;
    name: string;
    label: string;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

}

export const RadioButton = ({ 
  id, 
  name, 
  label, 
  checked, 
  onChange 
}: RadioProps) => {
  return (
    <div className="inline-flex items-center">
      <label htmlFor={id} className="relative flex items-center cursor-pointer">
        <input
          type="radio"
          name={name}
          className="peer h-3 w-3 cursor-pointer appearance-none rounded-full border border-primary checked:border-primary transition-all checked:bg-primary"
          id={id}
          checked={checked}
          onChange={onChange}
        />
        <span className="absolute bg-primary h-2 w-2 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
      </label>
      <label htmlFor={id} className="ml-2 cursor-pointer">{label}</label>
    </div>
  );
};

