export default function Cart() {
  return (
    <div className="h-screen mt-32">
      <h1 className="flex justify-center text-primary-100">Cart</h1>
      <div className="w-full flex justify-center py-6">
        <p className="w-1/2 text-center text-dark-surface-200">
          Your cart is empty!
        </p>
      </div>
    </div>
  )
}