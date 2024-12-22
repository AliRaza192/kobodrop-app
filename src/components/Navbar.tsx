import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Kobodrop from "../assets/logos/kobodrop_logo.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import ButtonLink from "../common/ButtonLink";

const Navbar = () => {
  const textLinkClasses =
    "text-gray-600 hover:text-gray-900 active:text-gray-700";

  const navLinks = [
    { href: "#features", children: "Features" },
    { href: "#partners", children: "Partners" },
    { href: "#review", children: "Review" },
  ];

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="flex h-[15vh] max-w-7xl items-center justify-between px-8 lg:px-12 xl:mx-auto">
            <div className="flex ">
              <ButtonLink
                href="#"
                children={<img src={Kobodrop} alt="Kobodrop Logo" />}
              />
              <div className="hidden sm:flex space-x-4 ml-4 sm:ml-6 lg:ml-8 lg:*:space-x-8 items-center ">
                {navLinks.map((link, index) => (
                  <ButtonLink
                    key={index}
                    href={link.href}
                    children={link.children}
                    className={textLinkClasses}
                  />
                ))}
              </div>
            </div>
            <ButtonLink
              href="https://play.google.com"
              target="_blank"
              children="Install Kobodrop App"
              className="hidden sm:flex active:bg rounded-lg bg-gray-800 hover:bg-gray-900 text-white px-5 py-3 active:bg-slate-500"
            />

            {/* <a
              href="https://play.google.com"
              target="_blank"
              className="hidden sm:flex active:bg rounded-lg bg-gray-800 hover:bg-gray-900 text-white px-5 py-3 active:bg-slate-500"
            >
              Install Kobodrop App
            </a> */}
            <DisclosureButton className="rounded-md p-2 text-gray-500 hover:bg-gray-900 hover:text-white sm:hidden">
              {open ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </DisclosureButton>
          </div>
          <DisclosurePanel className="sm:hidden space-y-1 px-4">
            {navLinks.map((link, index) => (
              <DisclosureButton
                key={index}
                as="a"
                href="#features"
                className="block"
              >
                {link.children}
              </DisclosureButton>
            ))}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
