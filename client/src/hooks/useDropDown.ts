import { useState } from "react";

const useDropdown = (initailState: string) => {
  const [isToggled, setIsToggled] = useState(false);
  const [selectedItem, setSelectedItem] = useState(initailState);

  const handleSelectBoxToggle = () => {
    setIsToggled(!isToggled);
  };

  const handleSelectItem = (value: any): any => {
    setSelectedItem(value);
    setIsToggled(false);
  };

  return {
    isToggled,
    selectedItem,
    setIsToggled,
    handleSelectBoxToggle,
    handleSelectItem,
  };
};
export default useDropdown;
