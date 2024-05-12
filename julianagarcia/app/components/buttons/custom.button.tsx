import { icons } from "../icons";
import { bgWater } from "@/app/constants";

interface ICustomButton {
  label: string;
  customFn: any;
  icon?: string;
}

export default function CustomButton({ label, icon, customFn }: ICustomButton) {

  const btnStyle = {
    display: "flex",
    alignItems: "center",
    padding: "5px 10px",
    background: bgWater,
    borderRadius: "5px",
    color: "white",
    gap: "5px",
    justifyContent: "center"
  };

  return (
    <button type="button" onClick={customFn} style={btnStyle}>
      {icon && icons[icon]}
      <span>{label}</span>
    </button>
  );
}
