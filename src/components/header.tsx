
import Link from "next/link";
import { useRouter } from 'next/router';

function Header() {
    const router = useRouter();
  return (
    <nav>
      <Link href="https://elegant-dolphin-e14032.netlify.app/">
        Home
      </Link>
      <Link href="/">
        Blog
      </Link>
    </nav>
  );
}

export default Header;