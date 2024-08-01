export default async function formSubmitHandler(e, url, method, bodyData) {
    e.preventDefault();

    const res = await fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
    });

    const data = await res.json();
    return data;
}