import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="breadcrumb max-w-[1440px] md:mt-[20px] mt-[10px] xl:px-[65px] sm:px-[20px] px-[15px] mx-auto">
      <ul className="flex gap-[8px] text-[#202020]">
        <li>
          {pathnames.length === 0 ? (
            ""
          ) : (
            <Link to="/" className="text-[#7A7687]">
              Главная
            </Link>
          )}
        </li>
        {pathnames.length === 0 ? "" : <li>&gt;</li>}
        {pathnames.map((path, index) => (
          <React.Fragment key={index}>
            {index > 0 && <span> &gt; </span>}
            <li>
              {index === pathnames.length - 1 ? (
                decodeURIComponent(path)
              ) : (
                <Link to={`/${pathnames.slice(0, index + 1).join("/")}`}>
                  {decodeURIComponent(path)}
                </Link>
              )}
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumb;
