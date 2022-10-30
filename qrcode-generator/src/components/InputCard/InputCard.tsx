import { useRef, useState } from "react";
import {
  InputCardContainer,
  InputCardTitle,
  InputCardInput,
  InputCardButton,
} from "./InputCard.style";

export default function InputCard() {
  const inputRef = useRef({} as HTMLInputElement);
  const [qrCodeValue, setQrCodeValue] = useState("");

  return (
    <>
      <InputCardContainer>
        <InputCardTitle> Enter your URL here </InputCardTitle>
        <InputCardInput ref={inputRef} />
        <InputCardButton onClick={() => setQrCodeValue(inputRef.current.value)}>
          Generate QR Code
        </InputCardButton>
      </InputCardContainer>
      {qrCodeValue && (
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrCodeValue}`}
          alt={`QR Code for the entered URL ${qrCodeValue}`}
        />
      )}
    </>
  );
}
