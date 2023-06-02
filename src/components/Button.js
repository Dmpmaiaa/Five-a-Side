export default function Button({text = "Log In", variant, color}){
    const tailwindColors = {
        blue: 'bg-[#0C8CE9]',
        red: 'bg-red-500',
        green: 'bg-green-500',
        // Add more color mappings as needed...
      };

     
    
      let buttonStyle = variant === 'transparent' 
    ? 'rounded-full w-64 h-9 text-base text-[#F4F4F9] border border-[#F4F4F9] bg-transparent'
    : `rounded-full w-64 h-9 text-base text-[#F4F4F9] ${tailwindColors[color]}`; // É PRECISO MUDAR A FONT

  return (
    <button className={buttonStyle}>
      {text}
    </button>
  );
}
    