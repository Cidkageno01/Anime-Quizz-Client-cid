import { fetchUrl } from "../config";

/**
 * 
 * @param {string} text 
 */
export function showDialogInformation(text) {

    const dialog = document.createElement('dialog');

    dialog.innerHTML = `<div class="d-flex align-items-center flex-column gap-4 m-3">
        <div><img src="./joy.png" alt="small_luffy" height="100"></div>
        <div class="text-center fw-bold">${text}</div>
        <div><a href="#" class="btn btn-primary" id="closeDialogBtn">D'accord</a></div>
    </div>`;

    document.body.appendChild(dialog);

    dialog.showModal();

    document.querySelector('#closeDialogBtn').addEventListener('click', evt => {
        evt.stopPropagation();
        evt.preventDefault();

        dialog.close();
        dialog.remove();
    });
};

export async function verifUserIsRegistered() {
    const user = localStorage.getItem("userId");

    if (user) {
        const result = await fetch(fetchUrl + "/login?username=" + user);

        if (result.status == 200) {
            let userData = await result.json();

            if (userData.isregistered) {
                return console.log('userIsRegistered');
            }
        }
    } else {
        console.log("Aucun utilisateur enregistré.");
        // Au lieu de créer un utilisateur, vous pouvez ajouter une logique alternative ici si nécessaire.
    }
}
