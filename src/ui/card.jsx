/* eslint-disable react/prop-types */
const ProjectCard = ({ desc, title, volume, payment, imgUrl }) => {
  return (
    <div className="rounded-lg border-fuchsia-200 border w-[18vw] cursor-pointer mr-12 my-8">
      <img
        src={imgUrl}
        alt="project"
        className="h-[180px] w-full object-cover rounded-lg"
      />
      <div className="px-5 py-4">
        <h2 className="font-bold text-[18px] overflow-hidden capitalize whitespace-nowrap text-ellipsis w-[80%] shadow-lg">
          {title}
        </h2>
        <p className="text-[11px] mt-2">{desc}</p>

        <div className="flex w-full justify-between">
          <div className="mt-4">
            <p className="text-fuchsia-200 font-semibold text-[12px]">VOLUME</p>
            <p className="font-bold">ETH {volume}</p>
          </div>
          <div className="mt-4">
            <p className="text-fuchsia-200 font-semibold text-[12px]">PAYMENT</p>
            <p className="font-bold">{payment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
