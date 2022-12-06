import React from "react";
import "./Desk.css";

const DeskAbout = () => {
  return (
    <div className="desk_container">
      <div className="dIntro dcontent">
        <h2>About Me Otherwise</h2>
        <br />
        <p>
          Isn't it nice when your new colleague, who is excited to participate
          and grow with the team, is also gregarious and has interests outside
          of work??? I have been playing guitar and pretending to play piano
          since the seventh grade, and though I am not performing live with a
          group these days, I still write and record music in my living room. I
          have also recently started a new writing project, making little hand
          held paper books of poetry and distributing them for free. Though this
          project is still in it's infancy stage. I enjoy travelling when I can
          and have been learning Spanish and Portuguese. If you are curious, my
          favorite place thus have either been Florence or Prague. I am an uncle
          and value quality time with my 5 year old nephew when I can get it,
          and have for the majority of my life owned a dog; though on a
          temporary hiatus right now.
        </p>
        <ul id="fun_facts">
          <h4>Some fun facts...</h4>

          <li> My first concert ever was Ray Charles </li>
          <li>
            I meant David Cross in person and she excitedly referred to me as an
            angel with beer{" "}
          </li>
          <li>
            {" "}
            I was born at 11:11 PM which the doctor told my mother signify that
            (according to old wives tales) that was supposed to become a priest.
            Which gets funnier the more you know me.
          </li>
        </ul>
      </div>
      <div>
        {/* <iframe
          title="music_player"
          id="music_player"
          src="https://bandcamp.com/EmbeddedPlayer/track=435361314/size=large/bgcol=333333/linkcol=4ec5ec/tracklist=false/artwork=small/transparent=true/"
          seamless
        >
          <a href="https://thesoundourteethmakeatnight.bandcamp.com/track/miles-away">
            Miles Away by the sound our teeth make at night
          </a>
        </iframe> */}
      </div>
    </div>
  );
};

export default DeskAbout;
