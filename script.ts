const form = document.getElementById('all-form') as HTMLFormElement | null;
const resumeDisplay = document.getElementById('display') as HTMLElement | null;

if (form && resumeDisplay) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = (document.getElementById('name') as HTMLInputElement).value;
        const title = (document.getElementById('title') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const address = (document.getElementById('address') as HTMLTextAreaElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
        const skill = (document.getElementById('skill') as HTMLTextAreaElement).value;

        resumeDisplay.innerHTML = `
            <header>
                <h1 contenteditable="true" class="editable">${name}</h1>
                <p contenteditable="true" class="editable main">${title}</p>
                <p contenteditable="true" class="editable">Email: ${email}  |  Phone: ${phone}</p>
            </header>
            <section class="address">
                <h2>Address</h2>
                <p contenteditable="true" class="editable">${address}</p>
            </section>
            <section class="education">
                <h2>Education</h2>
                <p contenteditable="true" class="editable">${education}</p>
            </section>
            <section class="experience">
                <h2>Experience</h2>
                <p contenteditable="true" class="editable">${experience}</p>
            </section>
            <section class="skill">
                <h2>Skill</h2>
                <p contenteditable="true" class="editable">${skill}</p>
            </section>
            <button class="toggle-btn" id="toggle-btn">Save Changes</button>
        `;

        const toggleBtn = document.getElementById('toggle-btn') as HTMLButtonElement;
        let isEditing = true;

        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                const editedFields = resumeDisplay.querySelectorAll('.editable');

                if (isEditing) {
                    editedFields.forEach(field => {
                        const editableElement = field as HTMLElement;
                        editableElement.setAttribute('contenteditable', 'false');
                        editableElement.style.border = 'none';
                    });

                    toggleBtn.textContent = 'Edit';
                    alert('Changes saved successfully!');
                } else {
                    editedFields.forEach(field => {
                        const editableElement = field as HTMLElement;
                        editableElement.setAttribute('contenteditable', 'true');
                        editableElement.style.border = '1px dashed #ccc';
                    });

                    toggleBtn.textContent = 'Save Changes';
                }

                isEditing = !isEditing;
            });
        }
    });
} else {
    console.error('Form or resume display element not found');
}
