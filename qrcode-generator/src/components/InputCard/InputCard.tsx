import {
  InputCardContainer,
  InputCardTitle,
  InputCardInput,
  InputCardButton,
} from "./InputCard.style";

interface InputCardProps {
  generateQRCode: (qrVal: string) => void;
  qrVal: string;
}

export default function InputCard({ generateQRCode, qrVal }: InputCardProps) {
  const handleOnClick = () => {
    generateQRCode(qrVal);
  };

  return (
    <InputCardContainer>
      <InputCardTitle> Enter your URL here </InputCardTitle>
      <InputCardInput />
      <InputCardButton onClick={handleOnClick} qrVal = {InputCardInput.value}>
        Generate QR Code
      </InputCardButton>
    </InputCardContainer>
  );
}
