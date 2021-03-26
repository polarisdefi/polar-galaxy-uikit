import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import { useWalletModal } from "../WalletModal";
import { Login } from "../WalletModal/types";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
}

const UserBlock: React.FC<Props> = ({ account, login, logout }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <div>
      {account ? (
        <Button
          size="md"
          
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {/* <Text> */}
          {accountEllipsis}
          {/* </Text> */}
        </Button>
      ) : (
        <Button
          size="md"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          CONNECT WALLET
        </Button>
      )}
    </div>
  );
};

export default UserBlock;
