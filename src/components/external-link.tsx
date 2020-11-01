type ExternalLinkProps = {
  href: string;
};

export const ExternalLink: React.FCX<ExternalLinkProps> = ({ children, ...props }) => (
  <a target="_blank" rel="noopener noreferrer" {...props}>
    {children}
  </a>
);
