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
  const [expandedIndex, setExpandedIndex] = useState(null)

  function handleExpand(index) {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <>
      <div>MenuList</div>
      <ul>
        {menuConfig.map((item, index) => (
          <li key={index}>
            {item.title}{' '}
            {item.subItems ? (
              <button onClick={() => handleExpand(index)}>
                {expandedIndex === index ? 'collapse' : 'expand'}
              </button>
            ) : null}
            {expandedIndex === index && item.subItems ? (
              <ul>
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex}>{subItem}</li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </>
  )
}
