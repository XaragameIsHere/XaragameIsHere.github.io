<div
  id="portfolio-window"
  className="window"
  style={{
    display: "none",
    flexDirection: "column",
    position: "absolute",
    top: "2%",
    left: "2%",
    height: "70%",
    aspectRatio: "3/2",
    background: "pink"
  }}
>
  <div className="title-bar">
    <img src="images/me.png" alt="me" style={{ width: "3%" }} />
    <div className="title-bar-text">Xara's Portfolio</div>
    <div className="title-bar-controls">
      <button aria-label="Minimize" />
      <button aria-label="Maximize" />
      <button onclick="closeAbout('portfolio-window')" aria-label="Close" />
    </div>
  </div>
  <div className="window-body">
    <div className="window-body">
      <menu role="tablist">
        <li
          id="Browser-Games"
          className="tab PortfolioGames"
          role="tab"
          aria-selected="true"
        >
          <a href="#tabs">Browser Games</a>
        </li>
        <li id="Demos" className="tab PortfolioGames" role="tab">
          <a href="#tabs">Demos</a>
        </li>
        <li id="Mods" className="tab PortfolioGamesNonBrowser" role="tab">
          <a href="#tabs">Mods</a>
        </li>
        <li id="Videos" className="tab PortfolioVideo" role="tab">
          <a href="#tabs">Videos</a>
        </li>
        <li
          id="Devlogs/Documentations"
          className="tab PortfolioWriting"
          role="tab"
        >
          <a href="#tabs">Documentations/Devlogs</a>
        </li>
        <li id="Scripts/Stories" className="tab PortfolioWriting" role="tab">
          <a href="#tabs">Scripts/Stories</a>
        </li>
        <li id="Roblox" className="tab PortfolioGamesNonBrowser" role="tab">
          <a href="#tabs">Roblox</a>
        </li>
        <li id="Code Snippets" className="tab PortfolioCode" role="tab">
          <a href="#tabs">Code Snippets</a>
        </li>
        <li id="Art" className="tab PortfolioImage" role="tab">
          <a href="#tabs">Art/Comics/etc</a>
        </li>
        <li id="3D Art" className="tab PortfolioImage" role="tab">
          <a href="#tabs">3D Art</a>
        </li>
        <li id="Websites" className="tab PortfolioWriting" role="tab">
          <a href="#tabs">Websites</a>
        </li>
      </menu>
      <div className="window" role="tabpanel">
        <div className="window-body">
          <div
            className="sunken-panel"
            style={{ height: "200%", width: "100%" }}
          >
            <table className="interactive" style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Creation Date&nbsp;</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody id="listOfElements"></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
