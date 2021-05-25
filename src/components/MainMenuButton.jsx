import React from "react";
import Button from '@material-ui/core/Button';

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
    <div className={props.style ? props.style : "main-menu-button"}>
      <Button onClick={onClickHandler} variant="contained" color="primary">Main Menu</Button>
    </div>
  )
}

export default MainMenuButton;