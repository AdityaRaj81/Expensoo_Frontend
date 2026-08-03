import AccountCard from "./AccountCard";

const MenuItem = ({
  icon,
  title,
  description,
  danger = false,
  onClick,
}) => {
  return (
    <AccountCard
      icon={icon}
      title={title}
      description={description}
      danger={danger}
      onClick={onClick}
    />
  );
};

export default MenuItem;