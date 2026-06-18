import ContactResult from "@/components/objects/molecules/ContactResult";

export default function ContactErrorPage() {
  return (
    <ContactResult
      iconPath="/images/icons/exclamation-triangle.svg"
      title="何らかのエラーが発生しました"
      description="お手数ですが時間を置いてもう一度お試しください"
      linkHref="/contact"
      linkLabel="問い合わせフォームへ戻る"
    />
  );
}
