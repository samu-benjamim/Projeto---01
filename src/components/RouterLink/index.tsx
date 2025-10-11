import { Link } from "react-router";

type RouteLinkProps = {
  children: React.ReactNode;
  href: string;
} & React.ComponentProps<"a">;

export function RouteLink({ children, href, ...props }: RouteLinkProps) {
  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  );
}
