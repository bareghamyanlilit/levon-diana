import Link from "next/link"; 

export function Footer() {
  return (
    <footer className="FontSHK_Dzeragir bottom-0 py-10 text-xl text-center text-[#ffffff]  bg-[#0c0c0c] ">
      
      <Link href="https://www.instagram.com/siteup.am/">
        <p className="mt-2 text-xl">
          Պատրաստվել է <span className="underline">siteup.am</span> -ի  կողմից 
        </p>
      </Link>
    </footer>
  );
}
