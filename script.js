const btn = document.getElementById("get-users");
const box = document.getElementById("users-box");
let users;

btn.addEventListener("click", async () => {
    try {
        const javob = await fetch("https://randomuser.me/api/?results=100");
        const data = await javob.json();
        users = data.results;
        usersView(users);
    } catch (error) {
        console.error("Xatolik yuz berdi:", error);
    }
});

function usersView(odamlar) {
    box.innerHTML = ``;

    odamlar.forEach(odam => {
        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
            <img src="${odam.picture.large}" alt="User Picture">
            <h2>${odam.name.title} ${odam.name.first} ${odam.name.last}</h2>
            <h3>Email: ${odam.email}</h3>
            <h3>Age: ${odam.dob.age}</h3>
            <h3>Address: ${odam.location.street.name} ${odam.location.street.number}</h3>
            <h3>Phone: ${odam.phone}</h3>
        `;

        box.appendChild(div);
    });
}
