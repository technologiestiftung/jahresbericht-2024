import cn from "./NavBar.module.scss";

import { useEffect, useState } from "react";
import BildungIcon from "../../icons/BildungNav.svg";
import KulturIcon from "../../icons/KulturNav.svg";
import NeueTechnologienIcon from "../../icons/NeueTechnologienNav.svg";
import PrototypingIcon from "../../icons/PrototypingNav.svg";
import SmartCityIcon from "../../icons/SmartCityNav.svg";
import UpIcon from "../../icons/Up.svg";
import WeiteresIcon from "../../icons/WeiteresNav.svg";
import SingleNavBarIcon from "./SingleNavBarIcon";

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

  const handleSingleNavBarIconClick = icon => {
    const getID = icon.id || icon.name.toLowerCase().replace(" ", "-");
    const section = document.getElementById(getID);
    if (!section) return;
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleUpIconClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={cn.wrapper}>
      <div className={cn.main}>
        {icons.map((icon, index) => (
          <div
            key={index}
            role='button'
            tabIndex={0}
            onClick={() => handleSingleNavBarIconClick(icon)}
            onKeyDown={event => {
              if (event.key === "Enter" || event.key === " ") {
                handleSingleNavBarIconClick(icon);
              }
            }}
          >
            <SingleNavBarIcon icon={icon.icon} name={icon.name} />
          </div>
        ))}
        {window.innerWidth <= 768 && (
          <div
            role='button'
            tabIndex={0}
            onClick={() => handleUpIconClick()}
            onKeyDown={event => {
              if (event.key === "Enter" || event.key === " ") {
                handleUpIconClick();
              }
            }}
          >
            <UpIcon />
          </div>
        )}
      </div>
      {window.innerWidth > 768 ? (
        <div
          role='button'
          tabIndex={0}
          className={cn.jump}
          onClick={() => handleUpIconClick()}
          onKeyDown={event => {
            if (event.key === "Enter" || event.key === " ") {
              handleUpIconClick();
            }
          }}
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
