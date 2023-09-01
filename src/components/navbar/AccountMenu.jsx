import React, { useState } from "react";
import {
  Menu,
  Button,
  MenuButton,
  MenuList,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  InputGroup,
  InputLeftElement,
  Input,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import VerificationModal from "./VerificationInput";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { LiaUser } from "react-icons/lia";

function AccountMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenModalSec,
    onClose: onCloseModalSec,
    onOpen: onOpenModalSec,
  } = useDisclosure();

  return (
    <div className="flex flex-row space-x-6">
      <div className="w-[40px] h-[40px] bg-yellow-500 rounded-full">
        <Icon as={LiaUser} w={10} h={10} />
      </div>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          <h1 className="text-sm uppercase">Login Premium | </h1>
        </MenuButton>
        <MenuList paddingLeft="20px">
          <Button onClick={onOpen}>Login</Button>
        </MenuList>
      </Menu>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent
          height="auto"
          width="full"
          background="gray.800"
          color="white"
          className="flex flex-col items-center py-5"
        >
          <ModalHeader>
            <h1 className="font-bold text-xl align-center">Login</h1>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody className="space-y-4">
            <h1 className="text-xl font-bold text-center">
              Selamat Datang Kembali
            </h1>
            <h1 className=" text-md text-center">
              Masukkan Nomer Telepon anda dan kami akan mengirimkan kode
              verifikasi anda
            </h1>
            <InputGroup marginY="30px">
              <InputLeftElement>+62</InputLeftElement>
              <Input type="tel" placeholder="phone number" variant="flushed" />
            </InputGroup>
          </ModalBody>
          <ModalFooter width="full">
            <Button
              width="full"
              onClick={() => {
                onClose();
                onOpenModalSec();
              }}
            >
              Kirim
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <VerificationModal isOpen={isOpenModalSec} onClose={onCloseModalSec} />
    </div>
  );
}

export default AccountMenu;
