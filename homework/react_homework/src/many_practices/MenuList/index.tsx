import React, {useState} from 'react'

const menuConfig = [
  {title: 'Home'},
  {
    title: 'Services',
    subItems: ['Cooking', 'Cleaning'],
  },
  {
    title: 'Contact',
    subItems: ['Phone', 'Mail'],
  },
]

export default function MenuList() {
  const [expandedMenuIndex, setExpandedMenuIndex] = useState(null)

  function handleExpand(index) {
    setExpandedMenuIndex(expandedMenuIndex === index ? null : index)
  }

  return (
    <>
      <div>MenuList</div>
      <ul>
        {menuConfig.map((item, index) => (
          <li key={Math.random().toString()}>
            <span>{item.title}</span>
            {item.subItems ? (
              <button onClick={() => handleExpand(index)}>
                {expandedMenuIndex === index ? 'collapse' : 'expand'}
              </button>
            ) : null}
            {expandedMenuIndex === index && item.subItems ? (
              <ul>
                {item.subItems.map((subItem, subIndex) => (
                  <li key={Math.random().toString()}>{subItem}</li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </>
  )
}
