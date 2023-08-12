import { Link, useLocation } from "react-router-dom";
import { ADD_NFT, CREATE_CYCLE, CREATE_PAYOUTS, CREATE_STAGE_1 } from "../helper/paths";

const CreateProjectLevel = () => {
    const { pathname } = useLocation();
    const projects = [
        {
            title: 'DETAILS',
            href: CREATE_STAGE_1,
        },
        {
            title: 'CYCLE',
            href: CREATE_CYCLE,
        },
        {
            title: 'PAYOUTS',
            href: CREATE_PAYOUTS,
        },
        {
            title: 'ADD NFT',
            href: ADD_NFT,
        },
    ];
    return (
        <div className="-mb-6 text-sm flex justify-between mt-12">
            {projects.map((project, idx) => (
                <Link to={project.href} key={project.title} className="flex items-center">
                    <p className={`mb-3 font-semibold ${pathname ===  project.href ? 'hover:text-white text-fuchsia-500' : 'hover:text-white text-white'}`}>{project.title}</p>
                    {idx !== projects.length - 1 && (
                        <div className={`w-[70px] h-[2px] rounded-full ml-6 -mt-3 ${pathname ===  project.href ? 'bg-fuchsia-500' : 'bg-white'}`} />
                    )}
                </Link>
            ))}
        </div>
    )
};

export default CreateProjectLevel;