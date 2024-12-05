import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/raviKumarLogo.webp';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <Link href='/' aria-label='Home'>
          <Image
            src={logo}
            className='mx-2'
            width={50}
            height={33}
            alt='Logo'
          />
        </Link>
      </div>

      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a
          href='https://www.linkedin.com/in/yourusername'
          target='_blank'
          rel='noreferrer'
          aria-label='LinkedIn'
        >
          <FaLinkedin />
        </a>
        <a
          href='https://github.com/yourusername'
          target='_blank'
          rel='noreferrer'
          aria-label='GitHub'
        >
          <FaGithub />
        </a>
        <a
          href='https://instagram.com/yourusername'
          target='_blank'
          rel='noreferrer'
          aria-label='Instagram'
        >
          <FaInstagram />
        </a>
        <a
          href='https://x.com/yourusername'
          target='_blank'
          rel='noreferrer'
          aria-label='X (Twitter)'
        >
          <FaXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
