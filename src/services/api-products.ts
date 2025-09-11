const url = "https://api-teste-front-production.up.railway.app";
const token = localStorage.getItem("token");
export async function getUnicProductsApi(id: string) {
    const response = await fetch(`${url}/products/${id}`, {
        method: "GET",
        headers: { 
            "Content-Type": "application/json", 
            "Authorization": `Bearer ${token}` 
        },
    })

    const data = await response.json();
    console.log("🚀 ~ getUnicProductsApi ~ data:", data)
    return data
}
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

export async function createProductApi(
  title: string,
  description: string,
  thumbnail: File | null
) {
  if (!thumbnail) throw new Error("Selecione uma imagem antes de enviar");

  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("thumbnail", thumbnail);


  const response = await fetch(`${url}/products`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Erro ao criar produto");
  }

  return await response.json();
}

export async function editProductApi(
  id: string,
  title: string,
  description: string
) {
  const response = await fetch(`${url}/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title, description }),
  });

  if (!response.ok) {
    throw new Error("Erro ao atualizar produto");
  }

  return await response.json();
}

export async function updateProductThumbnailApi(id: string, thumbnail: File) {
  const formData = new FormData();
  formData.append("thumbnail", thumbnail);

  const response = await fetch(`${url}/products/thumbnail/${id}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Erro ao atualizar thumbnail");
  }

  return await response.json();
}

