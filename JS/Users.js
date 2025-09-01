//Estructura de datos de los usuarios, para tener por defecto;
const defaultUsers = [
    {
        nombre: "Juan Pérez",
        email: "juan@cliente.com",
        password: "cliente123",
        telefono: "3001234567",
        direccion: "Calle 1 #23-45",
        rol: "customer"
    },
    {
        nombre: "Ana Torres",
        email: "ana@cliente.com",
        password: "cliente456",
        telefono: "3019876543",
        direccion: "Carrera 9 #12-34",
        rol: "customer"
    },
    {
        nombre: "Carlos Admin",
        email: "carlos@admin.com",
        password: "admin123",
        codigoEmpleado: "ADM001",
        rol: "admin",
        rolTipo: "Manager"
    },
    {
        nombre: "Laura Admin",
        email: "laura@admin.com",
        password: "admin456",
        codigoEmpleado: "ADM002",
        rol: "admin",
        rolTipo: "IT Support"
    }
];
const nameUser = document.getElementById("nameUser");
//Inicializar usuarios por defecto

function initDefaultUsers()
{
    if(!localStorage.getItem('usuarios'))
    {
        localStorage.setItem('usuarios',JSON.stringify(defaultUsers));
    }
}

//Obtener usuarios del localStorage
function getUsers()
{
    return JSON.parse(localStorage.getItem('usuarios')) || [];
}

//Guardar Usuarios
function saveUsers(users)
{
    localStorage.setItem('usuarios', JSON.stringify(users));
}

// Registrar usuario
function registerUser(user) {
    const users = getUsers();
    if (users.some(u => u.email === user.email)) {
        return { success: false, message: "El correo ya está registrado." };
    }
    users.push(user);
    saveUsers(users);
    return { success: true };
}

// Iniciar sesión
function loginUser(email, password) {
    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        localStorage.setItem('sesion', JSON.stringify(user));
        return { success: true, user }; 
    }
    return { success: false, message: "Credenciales incorrectas." }; 
}

// Obtener usuario en sesión
function getSessionUser() {
    return JSON.parse(localStorage.getItem('sesion'));
}

// Cerrar sesión
function logoutUser() {
    localStorage.removeItem('sesion');
}

// Ejecutar al cargar el archivo
initDefaultUsers();