import Swal from "sweetalert2";

export const ConfirmModal = (title: string) => {
  const res = Swal.fire({
    title,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#69D06F",
    cancelButtonColor: "#FF6464",
    confirmButtonText: "확인",
    cancelButtonText: "취소",
  });
  return res;
};

export const SuccessModal = (title: string) => {
  const res = Swal.fire({
    title,
    icon: "success",
    confirmButtonColor: "#69D06F",
  });
  return res;
};
