import Card from "./Card";
import imageGekko from "./../image/valorantGekko.jpg";

const Content = () => {
    return (
      <div className="content_container">
        <Card img={imageGekko} name={"Gekko"}/>
      </div>
    );
  };
  export default Content;