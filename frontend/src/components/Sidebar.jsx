import { cn } from "@/lib/utils";
import { sidebarLinks } from "../../Constant";
import { Link, useParams } from "react-router-dom";

const Sidebar = () => {

    const pathName = useParams()

    return (
        <section className="sticky left-0 top-0 flex  flex-col  justify-between w-fit h-screen p-6 max-sm:hidden lg:w-[330px] text-black bg-myColor-1">
      <div className=" flex flex-col gap-4">
        {sidebarLinks.map((link) => {
          const isActive = true
            // pathname === link.route && pathname.startsWith(link.route);

          return (
            <Link
              to={link.route}
              key={link.label}
              className={cn(
                "flex gap-2 items-center p-3 rounded-lg justify-start",
                { "bg-blue-1": isActive }
              )}
            >
              <img
              src={link.icon}
              alt={`${link.label} icon`}
              height={24}
              width={24}
            
                />
          <p className="font-semibold max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
    );
};

export default Sidebar;