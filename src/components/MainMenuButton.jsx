import React from "react";

function MainMenuButton(props) {

  function onClickHandler() {
    props.setMatches({
      totalMatches: 25,
      playerMatches: 0,
      aiMatches: 0
    })
    props.setGameStage("setup")
  }

  return (
    <div>
      <button className={props.style ? props.style : "main-menu-button"} onClick={onClickHandler}>Main Menu</button>
    </div>
  )
}

export default MainMenuButton;