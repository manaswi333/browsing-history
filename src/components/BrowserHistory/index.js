import './index.css'
import {useState} from 'react'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
const BrowserHistory = () => {
  const [searchInput, setSearchInput] = useState('')
  const [historyList, setHistoryList] = useState(initialHistoryList)

  const handleSearchInputChange = event => {
    setSearchInput(event.target.value)
  }

  const handleDelete = id => {
    const updatedHistoryList = historyList.filter(item => item.id !== id)
    setHistoryList(updatedHistoryList)
  }

  const filteredHistory = historyList.filter(item =>
    item.title.toLowerCase().includes(searchInput.toLowerCase()),
  )

  return (
    <div className="app-container">
      {/* App logo */}
      <img
        src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
        alt="app logo" 
        className="app-logo"
      />

      {/* Search bar */}
      <div className="search-bar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/search-img.png"
          alt="search"
          className="search-icon"
        />
        <input
          type="search"
          className="search-input"
          placeholder="Search history"
          value={searchInput}
          onChange={handleSearchInputChange}
        />
      </div>

      {/* History list */}
      <ul className="history-list">
        {filteredHistory.length > 0 ? (
          filteredHistory.map(item => (
            <li key={item.id} className="history-item">
              <div className="history-item-container">
                <img
                  src={item.logoUrl}
                  alt="domain logo"
                  className="history-logo"
                />
                <div className="history-details">
                  <p className="title">{item.title}</p>
                  <p className="domain-url">{item.domainUrl}</p>
                  <p className="time-accessed">{item.timeAccessed}</p>
                </div>

                {/* Delete button and icon */}
                <button
                  type="button"
                  className="delete-button"
                  data-testid="delete"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                  alt="delete"
                  className="delete-icon"
                />
              </div>
            </li>
          ))
        ) : (
          <p className="no-history">There is no history to show</p>
        )}
      </ul>
    </div>
  )
}

export default BrowserHistory
