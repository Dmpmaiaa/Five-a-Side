export default function Button({ text, border, color }) {
  return (
    <button
      className={`rounded-full w-64 h-9 text-base text-contrastOffWhite bg-${
        color ? color : "transparent"
      } ${border && 'border border-contrastOffWhite border-opacity-60'}`}
      
    >
      {text}
    </button>
  );
}
