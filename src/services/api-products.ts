import { ur } from "zod/v4/locales";

const url = "https://api-teste-front-production.up.railway.app";
const token = localStorage.getItem("token");
console.log("🚀 ~ token:", token)
export async function getProductsApi() {
    const response = await fetch(`${url}/products`, {
        method: "GET",
        headers: { 
            "Content-Type": "application/json", 
            "Authorization": `Bearer ${token}` 
        },
    })

    const data = await response.json();
    return data
}

export async function deleteProductApi(id: string) {
    await fetch(`${url}/products/${id}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }
    )
}

export async function createProductApi(title: string, description: string, thumbnail: string) {
    await fetch(`${url}/products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ title, description, thumbnail })
    })
}