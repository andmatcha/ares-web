import { Link } from "@/i18n/routing";

export default function ContactSuccessPage() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="w-32 h-32">
            <img
              src="/images/icons/check-circle.svg"
              alt=""
              className="w-full"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="text-center text-2xl">お問い合わせ完了</h2>
            <p className="text-center text-sm mb-2">
              担当者より返信を差し上げますのでお待ち下さい
            </p>
            <Link href="/" className="text-ares-red ease-in-out">
              トップページへ戻る
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
