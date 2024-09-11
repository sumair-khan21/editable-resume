var form = document.getElementById('all-form');
var resumeDisplay = document.getElementById('display');
if (form && resumeDisplay) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var title = document.getElementById('title').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var address = document.getElementById('address').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skill = document.getElementById('skill').value;
        resumeDisplay.innerHTML = "\n            <header>\n                <h1 contenteditable=\"true\" class=\"editable\">".concat(name, "</h1>\n                <p contenteditable=\"true\" class=\"editable main\">").concat(title, "</p>\n                <p contenteditable=\"true\" class=\"editable\">Email: ").concat(email, "  |  Phone: ").concat(phone, "</p>\n            </header>\n            <section class=\"address\">\n                <h2>Address</h2>\n                <p contenteditable=\"true\" class=\"editable\">").concat(address, "</p>\n            </section>\n            <section class=\"education\">\n                <h2>Education</h2>\n                <p contenteditable=\"true\" class=\"editable\">").concat(education, "</p>\n            </section>\n            <section class=\"experience\">\n                <h2>Experience</h2>\n                <p contenteditable=\"true\" class=\"editable\">").concat(experience, "</p>\n            </section>\n            <section class=\"skill\">\n                <h2>Skill</h2>\n                <p contenteditable=\"true\" class=\"editable\">").concat(skill, "</p>\n            </section>\n            <button class=\"toggle-btn\" id=\"toggle-btn\">Save Changes</button>\n        ");
        var toggleBtn = document.getElementById('toggle-btn');
        var isEditing = true;
        if (toggleBtn) {
            toggleBtn.addEventListener('click', function () {
                var editedFields = resumeDisplay.querySelectorAll('.editable');
                if (isEditing) {
                    editedFields.forEach(function (field) {
                        var editableElement = field;
                        editableElement.setAttribute('contenteditable', 'false');
                        editableElement.style.border = 'none';
                    });
                    toggleBtn.textContent = 'Edit';
                    alert('Changes saved successfully!');
                }
                else {
                    editedFields.forEach(function (field) {
                        var editableElement = field;
                        editableElement.setAttribute('contenteditable', 'true');
                        editableElement.style.border = '1px dashed #ccc';
                    });
                    toggleBtn.textContent = 'Save Changes';
                }
                isEditing = !isEditing;
            });
        }
    });
}
else {
    console.error('Form or resume display element not found');
}
