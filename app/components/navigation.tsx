import { Disclosure, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/16/solid";

interface NavigationItem {
  name: string;
  href: string;
}

const navigationItems: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Sign Up", href: "/signup" },
  { name: "Contact", href: "/contact" },
];

export default function NavBar() {
  return (
    <nav>
      <div className="sm:hidden">
        <Disclosure>
          <Disclosure.Button className="text-gray-500 hover:text-gray-700">
            <Bars3Icon className="ui-open:rotate-90  w-6 h-6 transition-transform duration-30" />
          </Disclosure.Button>
          <Transition
            enter="ease-in-out duration-300 transform"
            enterFrom="-translate-x-full rotate-180"
            enterTo="translate-x-0 rotate-0"
            leave="ease-in-out duration-300 transform"
            leaveFrom="translate-x-0 rotate-0"
            leaveTo="-translate-x-full rotate-180"
          >
            <Disclosure.Panel>
              {/* {({ close }) => (
              <button
                onClick={async () => {
                  setTimeout(() => {
                    close();
                  }, 1000);
                }}
              >
                testing
              </button>
            )} */}
              {navigationItems.map((item: NavigationItem) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  className="block justify-center p-2 text-center"
                  href={item.href}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </Disclosure.Panel>
          </Transition>
        </Disclosure>
      </div>
    </nav>
  );
}
