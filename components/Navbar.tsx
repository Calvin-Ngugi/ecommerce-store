import Container from "@/components/ui/Container";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <h3 className="font-bold text-xl">STORE</h3>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
