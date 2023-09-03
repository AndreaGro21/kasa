import React, {useState } from "react";

function CollapseMenu({ title, text, styleContainer, styleBar }) {
  const [isOpenArr, setIsOpenArr] = useState(false);
  const handleToggle = () => {
    setIsOpenArr(!isOpenArr)
  }
  return (
    <div className={styleContainer}>
      <div className={styleBar} onClick={() => handleToggle()}>
        {title}
        <i className={`fa-solid fa-chevron-${isOpenArr ? 'down' : 'up'}`}></i>
      </div>
      <div  className={`collapse-text ${isOpenArr ? 'visible' : ''}`}>
          {text}
      </div>
    </div>
  );
}

export default CollapseMenu;