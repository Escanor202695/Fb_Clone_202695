import React from 'react';

function HeaderIcon({Icon,active}) {
    return (
        <div className="flex cursor-pointer items-center md:px-5 xl:px-10 sm:h-14
        md:hover:bg-gray-100 rounded-xl border-b-2 border-transparent md:active:border-blue-500 group">
            <Icon className={`h-5 text-gray-500 group-hover:text-blue-500 sm:h-7 mx-auto ${active && "text-blue-500"}`}/>
        </div>
    );
}

export default HeaderIcon;