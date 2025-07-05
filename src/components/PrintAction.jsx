import { selectInvoice } from "@/slices/invoicesSlice";
import { IconButton, Tooltip } from "@mui/material";
import { useRouter } from "next/navigation";
import { IoPrint } from "react-icons/io5";
import { useDispatch } from "react-redux";

export const PrintAction = ({ id }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <Tooltip title="Print Invoice">
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
          // Add print functionality here
          dispatch(selectInvoice(id));
          router.push("/showInvoice");
        }}
        sx={{ color: "primary.main" }}
      >
        <IoPrint />
      </IconButton>
    </Tooltip>
  );
};
