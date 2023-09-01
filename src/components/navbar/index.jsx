import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/LogoOracle.png";
import { InputGroup, Input, InputRightElement, Icon } from "@chakra-ui/react";
import AccountMenu from "./AccountMenu";
import { SearchIcon } from "@chakra-ui/icons";

function Navbar() {
  return (
    <nav className="w-full h-24 bg-teal-800 flex flex-row items-center justify-between px-12 fixed-top z-10">
      <div className="flex flex-row items-center space-x-3 text-white">
        <Link href="/">
          <Image src={Logo} width={200} height={100} alt="Logo Oracle" />
        </Link>
        <h1 className="text-sm font-semibold">PREMIUM</h1>
      </div>
      <div className="w-1/3">
        <InputGroup>
          <Input
            type="text"
            placeholder="Cari Nama Game"
            _focus={{ backgroundColor: "white" }}
            focusBorderColor="teal.800"
          />
          <InputRightElement>
            <Icon as={SearchIcon} color="white" />
          </InputRightElement>
        </InputGroup>
      </div>
      <AccountMenu />
    </nav>
  );
}

export default Navbar;
