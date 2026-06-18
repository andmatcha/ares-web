import ContactResult from "@/components/objects/molecules/ContactResult";

export default function ContactSuccessPage() {
  return (
    <ContactResult
      iconPath="/images/icons/check-circle.svg"
      title="お問い合わせ完了"
      description="担当者より返信を差し上げますのでお待ち下さい"
      linkHref="/"
      linkLabel="トップページへ戻る"
    />
  );
}
