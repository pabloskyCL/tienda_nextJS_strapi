"use client"
import { useCart } from "@/hooks/use-cart";
import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from "@/lib/payment";


export default function CartSummary() {

    const { items } = useCart();
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || '');

    const getSubTotal = () => {
        return items.reduce((prev, current) => {
            prev += current.price;
            return prev
        }, 0)
    }

    const getTaxAmount = () => {
        const subTotal = getSubTotal();
        return Math.round(subTotal * 0.19);
    }

    const getTotal = () => {
        const subTotal = getSubTotal();
        const taxes = getTaxAmount();
        return subTotal + taxes + 3.0;
    }

    const handlePayment = async () => {
        try {
            const stripe = await stripePromise
            const res = await makePaymentRequest.post("/api/orders", {
                products: items
            })
            console.log(res.data.stripeSession.id)
            await stripe?.redirectToCheckout({
                sessionId: res.data.stripeSession.id
            })

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Detalles de la orden.</h2>
            <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-600 font-medium">${getSubTotal()}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Envio</span>
                    <span className="text-gray-600 font-medium">$3.00</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Impuestos.</span>
                    <span className="text-gray-600 font-medium">${getTaxAmount()}</span>
                </div>
                <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between">
                        <span className="text-gray-600 font-medium">Total</span>
                        <span className="text-gray-600 font-medium">${getTotal()}</span>
                    </div>
                </div>
            </div>
            <button onClick={handlePayment} className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
                Pagar
            </button>
        </div>
    );
}