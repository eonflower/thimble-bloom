import { useRouter } from "next/router";

export default function Item() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className="h-screen mt-32">
      <h1 className="flex justify-center text-primary-100">{slug}</h1>
      <div className="w-full flex justify-center py-6">
        <p className="w-1/2 text-center text-dark-surface-200">
          this is your {slug}
        </p>
      </div>
    </div>
  );
}