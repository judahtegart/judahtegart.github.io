document.getElementById('passwordForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var pw = document.getElementById('password').value;
    if (pw === 'password123') {
        window.location.href = '/home';
    } else {
        document.getElementById('errorMsg').style.display = 'block';
    }
});