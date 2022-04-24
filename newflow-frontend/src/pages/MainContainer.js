import React from "react";
import Chart from "../components/Chart";

function MainContainer() {
  return (
    <article className="mainContainer">
      <header>
        <h1>newsflow</h1>
      </header>
      <main>
        <Chart />
      </main>
      <footer></footer>
    </article>
  );
}

export default MainContainer;
