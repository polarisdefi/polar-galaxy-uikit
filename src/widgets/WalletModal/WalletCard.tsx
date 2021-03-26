import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import { localStorageKey } from "./config";
import { Login, Config } from "./types";

interface Props {
  walletConfig: Config;
  login: Login;
  onDismiss: () => void;
  mb: string;
}

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss, mb }) => {
  const { title, icon: Icon } = walletConfig;
  return (
    <Button
      fullWidth
      onClick={() => {
        login(walletConfig.connectorId);
        window.localStorage.setItem(localStorageKey, "1");
        onDismiss();
      }}
      style={{ justifyContent: "start", backgroundColor: "#14102F" }}
      mb={mb}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
    >
      <Icon width="32px" />
      <Text bold ml="16px">
        {title}
      </Text>
    </Button>
  );
};

export default WalletCard;
