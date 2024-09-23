export default interface StarIconProps {
    fontSize?:
      |"small"
      | "large"
      | "inherit"
      | "medium";
    color?:
      | "inherit"
      | "primary"
      | "secondary"
      | "success"
      | "error"
      | "info"
      | "warning";
    sx?: object;
}