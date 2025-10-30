import ForTeam from "./ForTeam";
import ForTeamPC from "./ForTeamPC";
import Industries from "./Industries";
import UseCase from "./UseCase";

const ForTeamCPN = () => {
  return (
    <div>
      <div className="lg:tw-hidden">
        {/* <ForTeam /> */}
        <UseCase />
        <Industries />
      </div>
      <div className="lg:tw-mt-15 tw-hidden lg:tw-block">
        <ForTeamPC />
      </div>
    </div>
  );
};

export default ForTeamCPN;
