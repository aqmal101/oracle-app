import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  Input,
  useDisclosure,
} from "@chakra-ui/react";

function VerificationModal({ isOpen, onClose }) {
  const [closeModal, setCloseModal] = useState(false);
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const handleCodeChange = (index, value) => {
    const newVerificationCode = [...verificationCode];
    newVerificationCode[index] = value;
    setVerificationCode(newVerificationCode);

    if (index < 5 && value !== "") {
      document.getElementById(`code-${index + 1}`).focus();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        height="auto"
        width="full"
        background="gray.800"
        color="white"
        className="flex flex-col items-center py-5"
      >
        <ModalHeader className="text-bold">Enter Verification Code</ModalHeader>
        <ModalCloseButton />
        <ModalBody className="space-y-4">
          <h1 className="text-xl text-center">Selamat Datang Kembali</h1>
          <h1 className=" text-md text-center">
            Masukkan Nomer Telepon anda dan kami akan mengirimkan kode
            verifikasi anda
          </h1>
          <div className="flex justify-center space-x-2 py-3">
            {verificationCode.map((digit, index) => (
              <Input
                key={index}
                id={`code-${index}`}
                className="w-12 h-12 text-center"
                fontSize="30px"
                maxLength="1"
                paddingBottom="5px"
                value={digit}
                variant="flushed"
                onChange={(e) => handleCodeChange(index, e.target.value)}
              />
            ))}
          </div>
          <Button
            width="full"
            mt={4}
            onClick={() => {
              const code = verificationCode.join("");
              console.log("Verification Code:", code);
              onClose();
            }}
          >
            Verify
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default VerificationModal;
