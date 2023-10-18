function validateForm() {
    // Retrieve values from form fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const firstTimeYes = document.getElementById("firstTimeYes").checked;
    const firstTimeNo = document.getElementById("firstTimeNo").checked;
    const recommendYes = document.getElementById("recommendYes").checked;
    const recommendNo = document.getElementById("recommendNo").checked;
    const satisfied = document.getElementById("satisfied").checked;
    const undecided = document.getElementById("undecided").checked;
    const unsatisfied = document.getElementById("unsatisfied").checked;
    const suggestions = document.getElementById("suggestions").value;

    // Validation for required fields
    if (!name || !email) {
        alert("Name and Email are mandatory fields. Please fill them out.");
        return;
    }

    // Display values in the popup
    const popupContent = document.getElementById("popup");
    popupContent.style.display = "block";
    const popupData = document.createElement("div");
    popupData.classList.add("popup-content");

    let message = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Is this your first time using our products & services?</strong> ${firstTimeYes ? 'YES' : (firstTimeNo ? 'NO' : 'Not selected')}</p>
        <p><strong>Would you recommend our products and services to your friends and colleagues?</strong> ${recommendYes ? 'YES' : (recommendNo ? 'NO' : 'Not selected')}</p>
        <p><strong>How satisfied are you with our products and services?</strong> 
            ${satisfied ? 'Satisfied' : ''} 
            ${undecided ? 'Undecided' : ''} 
            ${unsatisfied ? 'Unsatisfied' : ''}
        </p>
    `;

    if (suggestions) {
        message += `<p><strong>Do you have any suggestions to improve our service?</strong></p>`;
        message += `<p>${suggestions}</p>`;
    }

    popupData.innerHTML = message;
    popupData.innerHTML += `<button id="confirmBtn" onclick="confirmSubmission()">Confirm</button>`;

    popupContent.appendChild(popupData);
}

function confirmSubmission() {
    const confirmBtn = document.getElementById("confirmBtn");
    confirmBtn.style.display = "none";

    const popupContent = document.querySelector(".popup-content");
    const thankYouMessage = document.createElement("p");
    thankYouMessage.textContent = "Thank you for your time.";

    // Add a close button
    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.onclick = closePopup;
    
    popupContent.appendChild(thankYouMessage);
    popupContent.appendChild(closeButton);
}

function resetForm() {
    document.getElementById("surveyForm").reset();
}

function closePopup() {
    const popupContent = document.getElementById("popup");
    popupContent.style.display = "none";
    popupContent.innerHTML = "";
}
