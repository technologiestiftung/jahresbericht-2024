import cn from "./Icons.module.scss";
import SmartCityIcon from "../../icons/SmartCity.svg";
import NeueTechnologienIcon from "../../icons/NeueTechnologien.svg";
import KulturIcon from "../../icons/Kultur.svg";
import BildungIcon from "../../icons/Bildung.svg";
import ProtoypingIcon from "../../icons/Prototyping.svg";
import WeiteresIcon from "../../icons/Weiteres.svg";

function Icons({ type }) {
  return (
    <div className={cn.iconWrapper}>
      {type === "smartCity" && <SmartCityIcon />}
      {type === "neueTechnologien" && <NeueTechnologienIcon />}
      {type === "bildung" && <BildungIcon />}
      {type === "kultur" && <KulturIcon />}
      {type === "prototyping" && <ProtoypingIcon />}
      {type === "weitereAktivitaeten" && <WeiteresIcon />}
    </div>
  );
}

export default Icons;
