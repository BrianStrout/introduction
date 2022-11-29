import React from "react";
import "./Desk.css";

const DeskAbout = () => {
  return (
    <div className="desk_container">
      <div className="dIntro dcontent">
        <h2>About Me Otherwise</h2>
        When not furthering my education and skill set in web development I
        spend my time creating music, poetry, and occasionally art. I don't
        perform live anymore but still write and record music in my living room.
        I also have recently started a project making tiny books of poetry and
        distributing them for free in random book stores. I also value
        traveling, meeting new people, and finding new experiences to enjoy. I
        have been improving my Spanish and learning Portuguese. I have always
        enjoyed raising dogs but am currently taking a break after the my most
        recent one passed on this past May, but look forward to finding another
        four legged friend in 2023.<span> :) </span>
      </div>
      <div>
        <iframe
          title="music_player"
          id="music_player"
          src="https://bandcamp.com/EmbeddedPlayer/track=435361314/size=large/bgcol=333333/linkcol=4ec5ec/tracklist=false/artwork=small/transparent=true/"
          seamless
        >
          <a href="https://thesoundourteethmakeatnight.bandcamp.com/track/miles-away">
            Miles Away by the sound our teeth make at night
          </a>
        </iframe>
      </div>
    </div>
  );
};

export default DeskAbout;
