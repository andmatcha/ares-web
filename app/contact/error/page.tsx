import Link from "next/link";

export default function ContactErrorPage() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="w-32 h-32">
            <img
              src="/images/icons/exclamation-triangle.svg"
              alt=""
              className="w-full"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="text-center text-2xl">
              何らかのエラーが発生しました
            </h2>
            <p className="text-center text-sm mb-2">
              お手数ですが時間を置いてもう一度お試しください
            </p>
            <Link href="/contact" className="text-ares-red ease-in-out">
              問い合わせフォームへ戻る
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
