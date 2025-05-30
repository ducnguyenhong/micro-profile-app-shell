interface IconProps {
  w?: string;
  h?: string;
  color?: string;
}

export const IconMenu: React.FC<IconProps> = (props) => {
  const { w = '1em', h = '1em', color = 'currentColor' } = props;

  return (
    <svg viewBox="0 0 24 24" fill={color} height={h} width={w} {...props}>
      <path
        fill="currentColor"
        d="M2 6a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zM2 12.032a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zM3 17.064a1 1 0 100 2h18a1 1 0 000-2H3z"
      />
    </svg>
  );
};
