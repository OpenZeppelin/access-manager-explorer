import AddressAvatar from "@/components/address-avatar";
import { cn, truncateAddress } from "@/utils";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const AddressItem = ({ className, ...props }: Props) => {
  return (
    <div className={cn("flex items-center", className)} {...props}>
      <AddressAvatar
        address="0x973dA78c3Ff2c3aF1143E960d3161F09562eEC14"
        size={18}
        className="mr-2"
      />
      <p className="text-sm font-light">
        {truncateAddress("0x973dA78c3Ff2c3aF1143E960d3161F09562eEC14")}
      </p>
    </div>
  );
};

export default AddressItem;
