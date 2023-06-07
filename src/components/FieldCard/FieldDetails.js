export default function FieldDetails({ ball, type, vest, lockerRoom }) {
  return (
    <ul className="flex flex-col text-end font-robotoThin ms-2">
      <li className="text-contrastOffWhite  text-xs opacity-50 ">
        {ball && "Bola"}
      </li>
      <li className="text-contrastOffWhite  text-xs opacity-50 ">
        {type}
      </li>
      <li className="text-contrastOffWhite  text-xs opacity-50 ">
        {vest && "Coletes"}
      </li>
      <li className="text-contrastOffWhite  text-xs opacity-50 ">
        {lockerRoom && "Balneários"}
      </li>
    </ul>
  );
}
