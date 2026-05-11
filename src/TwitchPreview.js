import { useEffect } from "react";
import "./styles.css";

function TwitchPreview() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.twitch.tv/embed/v1.js";
    script.async = true;

    script.onload = () => {
      new window.Twitch.Embed("twitch-embed", {
        width: 1280,
        height: 720,
        channel: "arroznatwitch",
        parent: ["localhost"],
      });
    };

    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <div>
      <h1>
        <a href="https://twitch.tv/arroznatwitch">
          Preciso de comprar Arroz para terminar isto...
        </a>
      </h1>
      <h3 className="simple-text">
        Enquanto isso porque não assistires as minhas streams? :D
      </h3>
      <div id="twitch-embed"></div>
    </div>
  );
}

export default TwitchPreview;