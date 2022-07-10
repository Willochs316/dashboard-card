const CardIcon = ({ icons: Icons, className, title, onClick = () => {} }) => {
  return (
    <>
      {Icons && <Icons className={className} title={title} onClick={onClick} />}
    </>
  );
};
export default CardIcon;
