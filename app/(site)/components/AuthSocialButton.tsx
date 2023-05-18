import React from "react";
import { IconType } from "react-icons";

interface AuthSocialButtonProps {
  icon: IconType;
  onClick: () => void;
}
const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex w-full justify-center rounded-md bg-white pcx-4 py-2 shadow-sm right-1  ring-inset ring-gray-300 hover:bg-gry-50 focus:outline-offset-0 "
    >
      <Icon />
    </button>
  );
};

export default AuthSocialButton;
