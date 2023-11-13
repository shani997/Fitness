export default function validateForm({ name, password }) {
    if (!name.trim()) {
        return 'Username required';
    }

    if (!password) {
        return 'Password is required';
    } else if (password.length < 6) {
        return 'Password needs to be 6 characters or more';
    }


}