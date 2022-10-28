import { InputCardContainer, InputCardTitle, InputCardInput, InputCardButton } from "./InputCard.style";

export default function InputCard() {
  return (
    <InputCardContainer>
      <InputCardTitle>Enter your URL here </InputCardTitle>
      <InputCardInput />
      <InputCardButton>Generate QR Code</InputCardButton>
    </InputCardContainer>
  );
}
