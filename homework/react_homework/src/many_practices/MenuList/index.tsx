import React, { useState } from "react";

interface MenuItem {
  title: string;
  subItems?: string[];
}

interface SideMenuProps {
  menuConfig: MenuItem[];
}

const MenuList: React.FC<SideMenuProps> = ({ menuConfig }) => {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const handleExpand = (title: string) => {
    // check if the title clicked is the current title, if it is, collpase it, if not, expand
    setExpandedMenu(expandedMenu === title ? null : title);
  };

  return (
    <div className="menu-wrapper">
      {menuConfig.map((item) => (
        <div
          key={item.title}
          data-test-id={`first-level-${item.title.toLowerCase()}`}
        >
          <div>{item.title}</div>
          {/* checks if the subitem exists, and if there's actual content in it */}
          {item.subItems && item.subItems.length > 0 && (
            <>
              <button
                data-test-id={`button-${item.title.toLowerCase()}`}
                onClick={() => handleExpand(item.title)}
              >
                {expandedMenu === item.title ? "hide" : "expand"}
              </button>
              {/* render the menu */}
              {expandedMenu === item.title && (
                <ul data-test-id={`ul-${item.title.toLowerCase()}`}>
                  {item.subItems.map((subItem) => (
                    <li
                      key={subItem}
                      data-test-id={`li-${item.title.toLowerCase()}-${subItem.toLowerCase()}`}
                    >
                      {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default MenuList;
