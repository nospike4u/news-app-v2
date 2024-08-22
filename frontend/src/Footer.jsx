import logo from './assets/react.svg';

export default function Footer() {
  return (
    <footer className="bg-[#21242D] flex items-center justify-center gap-6 mx-auto py-8 px-2 rounded-lg">
      <img
        className="max-w-[70px] ml-2"
        src={logo}
        alt="Logo"
      />
      <small className="font-thin font-sans tracking-wider sm:text-lg md:text-xl font-[lato] text-[#F9F9F9]">
        &copy; Group: App by Dominic , Serhii , Chris <br />
        2024 Articles Blog. All rights reserved.
      </small>
    </footer>
  );
}
