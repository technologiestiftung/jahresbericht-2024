import cn from "./NavBar.module.scss";

import SmartCityIcon from "../../icons/SmartCityNav.svg";
import NeueTechnologienIcon from "../../icons/NeueTechnologienNav.svg";
import KulturIcon from "../../icons/KulturNav.svg";
import BildungIcon from "../../icons/BildungNav.svg";
import PrototypingIcon from "../../icons/PrototypingNav.svg";
import WeiteresIcon from "../../icons/WeiteresNav.svg";
import UpIcon from "../../icons/Up.svg";
import SingleNavBarIcon from "./SingleNavBarIcon";
import { useEffect, useState } from "react";

function NavBar() {
  const icons = [
    { name: "Smart City", id: "smartCity", icon: <SmartCityIcon /> },
    {
      name: "Neue Technologien",
      id: "neueTechnologien",
      icon: <NeueTechnologienIcon />,
    },
    {
      name: "Kultur",
      icon: <KulturIcon />,
    },
    {
      name: "Bildung",
      icon: <BildungIcon />,
    },
    {
      name: "Prototyping",
      icon: <PrototypingIcon />,
    },
    {
      name: "Weiteres",
      id: "weitereAktivitaeten",
      icon: <WeiteresIcon />,
    },
  ];
  const [indicator, setIndicator] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    if (window.innerWidth <= 768) {
      setIndicator((position / document.documentElement.scrollHeight) * 100);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={cn.wrapper}>
      <div className={cn.main}>
        {icons.map((icon, index) => (
          <div
            key={index}
            onClick={() => {
              const getID =
                icon.id || icon.name.toLowerCase().replace(" ", "-");
              const section = document.getElementById(getID);
              if (!section) return;
              section.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            <SingleNavBarIcon icon={icon.icon} name={icon.name} />
          </div>
        ))}
        {window.innerWidth <= 768 && (
          <div
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <UpIcon />
          </div>
        )}
      </div>
      {window.innerWidth > 768 ? (
        <div
          className={cn.jump}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <UpIcon />
        </div>
      ) : (
        <span className={cn.borderMobile} style={{ width: `${indicator}%` }} />
      )}
    </div>
  );
}

export default NavBar;
