export const checkValidationFile = (file?: File) => {
  if (typeof file === "undefined") {
    alert("파일이 없습니다.");
    return false;
  }

  if (file.size > 5 * 1024 * 1024) {
    alert("용량초과");
    return false;
  }

  if (file.type.includes("jpeg") && !file.type.includes("png")) {
    alert("jpe, png only");
    return false;
  }

  return true;
};
