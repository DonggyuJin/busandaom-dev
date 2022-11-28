import DaumPostcode from "react-daum-postcode";
import { AddressBox, AddressWrapper, AddressCancel } from "./Address.style";

interface AddressProps {
  address: string;
  setAddress: (address: string) => void;
  searchPopup: boolean;
  setSearchPopup: (searchPopup: boolean) => void;
}

export default function AddressModal({
  address,
  setAddress,
  searchPopup,
  setSearchPopup,
}: AddressProps) {
  const onCompletePost = (data: any) => {
    setAddress(data.address);
    setSearchPopup(false);
  };

  const onClose = () => {
    setSearchPopup(false);
  };

  return (
    <>
      {searchPopup ? (
        <AddressBox>
          <AddressWrapper>
            <AddressCancel
              onClick={(e: any) => {
                e.preventDefault();
                setSearchPopup(false);
              }}
            >
              ×
            </AddressCancel>

            <DaumPostcode
              style={{
                width: "70vw",
                height: "67vh",
              }}
              onComplete={onCompletePost}
              onClose={onClose}
              autoClose
            />
          </AddressWrapper>
        </AddressBox>
      ) : null}
    </>
  );
}
