import { toast } from "sonner";
import { create } from "zustand"
import { persist, createJSONStorage } from 'zustand/middleware'

interface CartStore {
    items: ProductType[],
    addItem: (data: ProductType) => void,
    removeItem: (id: number) => void,
    removeAll: () => void
}


export const useCart = create(persist<CartStore>((set, get) => ({
    items: [],
    addItem: (data: ProductType) => {
        console.log(data);
        const currentItems = get().items
        const existingItem = currentItems.find((item) => item.id === data.id)

        if (existingItem) {
            toast.error("El producto ya existe en el carrito")
            return
        }

        set(() => ({
            items: [...get().items, data]
        }))

        toast.success("Producto agregado al carrito")


    },
    removeItem: (id: number) => {
        set(() => ({ items: [...get().items.filter((item) => item.id !== id)] }))
        toast.success("Producto eliminado del carrito")
    },
    removeAll: () => {
        set(() => ({ items: [] }))
        toast.success("Carrito vaciado")
    }
}), {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage)
}))