import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { NavLink } from "@remix-run/react";
import clsx from "clsx";
import { UserCircleIcon } from "@heroicons/react/24/outline";

interface NavigationItem {
  name: string;
  href: string;
}

const navigationItems: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function NavBar() {
  return (
    <nav>
      <Disclosure>
        <div className="mx-auto max-w-7xl  sm:px-6 lg:px-8 py-2 flex justify-start gap-x-8">
          <div className="sm:hidden flex-none">
            <Disclosure.Button className="text-gray-500 hover:text-gray-700">
              <Bars3Icon className="ui-open:rotate-90  w-6 h-6 transition-transform duration-30" />
            </Disclosure.Button>
          </div>
          <div className="grow flex justify-center sm:flex-none ">
            <img
              src="/logo.svg"
              alt="logo"
              className="w-10 h-10 animate-bounce"
            />
          </div>
          <div className="hidden sm:flex gap-2 text-center items-center">
            {navigationItems.map((item: NavigationItem) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive, isPending }) =>
                  clsx(
                    isActive && "bg-blue-300 text-white",
                    "rounded-md",
                    "hover:scale-125",
                    "px-2",
                    "py-1"
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="hidden sm:flex justify-end items-center grow">
            <Menu as="div" className="relative ">
              <Menu.Button>
                <UserCircleIcon className="w-6 h-6" />
              </Menu.Button>
              <Menu.Items className="absolute mt-2 right-0 w-48 flex flex-col gap-1 bg-red-300 rounded-md p-4 shadow-md">
                <Menu.Item>
                  <NavLink
                    to="/signup"
                    className="ui-active:bg-blue-300 ui-active:text-white p-2 block rounded-md "
                  >
                    Sign Up
                  </NavLink>
                </Menu.Item>
                <Menu.Item>
                  <NavLink to="/signup" className="ui-active:bg-blue-300 block">
                    Sign Up
                  </NavLink>
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </div>
        <Transition
          enter="ease-in-out duration-300 transform"
          enterFrom="-translate-x-full rotate-180"
          enterTo="translate-x-0 rotate-0"
          leave="ease-in-out duration-300 transform"
          leaveFrom="translate-x-0 rotate-0"
          leaveTo="-translate-x-full rotate-180"
        >
          <Disclosure.Panel className="flex-col sm:hidden">
            {({ close }) => (
              <>
                {navigationItems.map((item: NavigationItem) => (
                  <NavLink
                    to={item.href}
                    key={item.name}
                    onClick={() => close()}
                    className={({ isActive }) =>
                      clsx(
                        isActive && "bg-blue-300 text-white",
                        "rounded-md",
                        "hover:scale-125",
                        "px-2",
                        "py-1",
                        "block",
                        "text-center"
                      )
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </>
            )}
          </Disclosure.Panel>
        </Transition>
      </Disclosure>
    </nav>
  );
}
