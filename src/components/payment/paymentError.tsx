import React from 'react';

const PaymentError: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-red-100">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h1 className="text-2xl font-bold text-red-600">Error en el Pago</h1>
                <p className="mt-4 text-gray-700">Ha ocurrido un error en el pago. Por favor, inténtelo de nuevo.</p>
            </div>
        </div>
    );
};

export default PaymentError;