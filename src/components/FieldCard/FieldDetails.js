export default function FieldDetails({ ball, type, vest, lockerRoom }) {
  return (
    <ul className="flex flex-wrap">
      <li className="text-contrastOffWhite text-right text-xs opacity-50 w-1/2">
        {ball && "Bola"}
      </li>
      <li className="text-contrastOffWhite text-right text-xs opacity-50 w-1/2">
        {type}
      </li>
      <li className="text-contrastOffWhite text-right text-xs opacity-50 w-1/2">
        {vest && "Coletes"}
      </li>
      <li className="text-contrastOffWhite text-right text-xs opacity-50 w-1/2">
        {lockerRoom && "Balneários"}
      </li>
    </ul>
  );
}
