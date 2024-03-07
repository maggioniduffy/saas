import Link from "next/link";

export function Navbar() {
    return (
        <nav className="border-b bg-background h-[10vh] flex items-center">
            <div className="container flex items-center justify-between">
                <Link href={"/"}>
                    <h1 className="font-bold text-lg"> Fausaas </h1>
                </Link>
                
            </div>
        </nav>
    )
}