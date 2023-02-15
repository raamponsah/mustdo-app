import { Menu } from '@headlessui/react'
import AccountButton from './AccountButton'

export default function MyDropdown() {
  return (
    <Menu>
      <Menu.Button>
      <button type="button" className="inline-flex w-full justify-center rounded-md border border-indigo-900 bg-indigo-900 px-4 py-2 text-sm font-medium  shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true">
      Account
    </button>
      </Menu.Button>
      <Menu.Items >
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Account settings
            </a>
          )}
        </Menu.Item>
   
    
      </Menu.Items>
    </Menu>
  )
}